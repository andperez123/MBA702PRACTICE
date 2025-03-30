# MBA 702 Study Helper

An interactive study tool for MBA 702 course material, featuring:
- Randomized quizzes from a comprehensive question bank
- AI-powered grading with detailed feedback
- Topics covering Bonds, Stocks, Options, and Futures

## Getting Started

First, set up your environment variables:

1. Create a `.env.local` file in the root directory
2. Add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

Then, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- 🎯 Random selection of 10 questions per quiz
- 📝 Interactive answer submission
- 🤖 AI-powered grading using GPT-3.5
- 📊 Detailed feedback and scoring
- 🔄 Option to retry with new questions

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- OpenAI API

## Deployment

This project is optimized for deployment on Vercel. Simply:

1. Push to GitHub
2. Import to Vercel
3. Add your `OPENAI_API_KEY` to Vercel's environment variables
4. Deploy!
