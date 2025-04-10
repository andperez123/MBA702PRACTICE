// pages/exam.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { questions } from "../data/exam-questions";
import { useRouter } from 'next/router';

type Question = {
  id: number;
  topic: string;
  question: string;
  correctAnswer: string;
};

type UserAnswer = {
  questionId: number;
  answer: string;
};

const ExamPage: NextPage = () => {
  const router = useRouter();
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [grade, setGrade] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Select 10 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 10);
    setExamQuestions(selectedQuestions);
    setUserAnswers(selectedQuestions.map(q => ({ questionId: q.id, answer: "" })));
  }, []);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setUserAnswers(prev =>
      prev.map(a => (a.questionId === questionId ? { ...a, answer } : a))
    );
  };

  const isAllAnswered = () => {
    return userAnswers.every(answer => answer.answer.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!isAllAnswered()) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setIsLoading(true);
    try {
      const submissionData = examQuestions.map(question => {
        const userAnswer = userAnswers.find(a => a.questionId === question.id);
        return {
          topic: question.topic,
          question: question.question,
          correctAnswer: question.correctAnswer,
          userAnswer: userAnswer?.answer || ""
        };
      });

      const response = await fetch("/api/grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: submissionData })
      });

      if (!response.ok) {
        throw new Error('Failed to submit answers');
      }

      const data = await response.json();
      setGrade(data.grade);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert("There was an error submitting your answers. Please try again.");
    }
    setIsLoading(false);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setGrade("");
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 10);
    setExamQuestions(selectedQuestions);
    setUserAnswers(selectedQuestions.map(q => ({ questionId: q.id, answer: "" })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MBA 702 Exam</h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        {!isSubmitted ? (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  i
                </div>
                <p className="text-gray-600 text-lg">
                  Complete all 10 questions below. Your answers will be evaluated based on accuracy, completeness, and clarity.
                </p>
              </div>
              
              <div className="space-y-8">
                {examQuestions.map((question, index) => (
                  <section 
                    key={question.id} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold mr-3">
                          {index + 1}
                        </span>
                        <div>
                          <span className="text-sm font-medium text-blue-600 block">{question.topic}</span>
                          <h2 className="text-xl font-semibold text-gray-800 mt-1">
                            {question.question}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <textarea
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition min-h-[120px] text-gray-700 placeholder-gray-400"
                        placeholder="Type your answer here..."
                        value={userAnswers.find(a => a.questionId === question.id)?.answer || ""}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      />
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] ${
                    isAllAnswered()
                      ? "bg-blue-500 hover:bg-blue-600 shadow-lg"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handleSubmit}
                  disabled={!isAllAnswered() || isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Grading...
                    </span>
                  ) : (
                    "Submit Answers"
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Assessment Results</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 mb-8 leading-relaxed">
                {grade}
              </div>
            </div>
            <button
              className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] shadow-lg"
              onClick={handleRetry}
            >
              Try Another Exam
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ExamPage;