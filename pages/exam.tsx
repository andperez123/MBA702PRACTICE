// pages/exam.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { questions as allQuestions } from "../data/exam-questions";
import { useRouter } from 'next/router';

// Utility function to randomly select N questions from an array
const getRandomQuestions = (questions: typeof allQuestions, count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ExamPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MBA 702 Exam</h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600 text-lg mb-6">
            Welcome to the MBA 702 exam. Click below to start your assessment.
          </p>
          <button
            onClick={() => router.push('/')}
            className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] shadow-lg"
          >
            Start Exam
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExamPage;