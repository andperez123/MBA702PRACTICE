// pages/api/grade.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  
  const { answers } = req.body;
  if (!answers || !Array.isArray(answers)) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a knowledgeable MBA professor grading student answers. For each answer:
1. Compare the student's answer to the correct answer
2. Assign a score out of 10 points based on:
   - Accuracy (how well it matches key concepts from the correct answer)
   - Completeness (whether all important points are covered)
   - Clarity (how well the concepts are explained)
3. Provide specific feedback:
   - What they got right
   - What they missed or could improve
   - How they could make their answer more complete
4. End with an overall summary including:
   - Total score out of 100
   - General strengths
   - Areas for improvement
   - Study suggestions for topics that need more attention`
        },
        {
          role: "user",
          content: answers.map((ans, index) => 
            `Question ${index + 1} [${ans.topic}]:\n` +
            `Q: ${ans.question}\n` +
            `Correct Answer: ${ans.correctAnswer}\n` +
            `Student Answer: ${ans.userAnswer}\n` +
            `---\n`
          ).join("\n")
        }
      ],
      temperature: 0.3,
      max_tokens: 1500
    });

    const grade = completion.choices[0].message?.content;
    res.status(200).json({ grade });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: "Error generating grade" });
  }
}