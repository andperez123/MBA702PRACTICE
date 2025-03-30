import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { flashcards, Flashcard } from '../data/flashcards';

const FlashCards: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [transform, setTransform] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Get unique subjects for filter
  const subjects = Array.from(new Set(flashcards.map(card => card.subject))).sort();

  // Filter flashcards based on selected subject
  const filteredCards = flashcards.filter(card => {
    return selectedSubject === 'all' || card.subject === selectedSubject;
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    setTransform(`translateX(${-diff}px)`);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    setTransform('');

    if (Math.abs(diff) > 100) { // minimum swipe distance
      if (diff > 0 && currentIndex < filteredCards.length - 1) {
        // Swiped left
        setCurrentIndex(prev => prev + 1);
        setShowAnswer(false);
      } else if (diff < 0 && currentIndex > 0) {
        // Swiped right
        setCurrentIndex(prev => prev - 1);
        setShowAnswer(false);
      }
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    } else if (e.key === ' ') {
      setShowAnswer(prev => !prev);
    }
  };

  // Reset current index when filters change
  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedSubject]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, filteredCards.length]);

  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">MBA 702 Flashcards</h1>
            <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-lg">No flashcards found for the selected subject.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MBA 702 Flashcards</h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Card {currentIndex + 1} of {filteredCards.length}
        </p>

        <div 
          className="bg-white rounded-xl shadow-lg p-6 mb-6 cursor-pointer select-none transition-transform duration-200"
          style={{ transform }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className="min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">{filteredCards[currentIndex].subject}</span>
            </div>
            <div className="text-center">
              {!showAnswer ? (
                <h2 className="text-2xl font-semibold text-gray-800">
                  {filteredCards[currentIndex].front}
                </h2>
              ) : (
                <p className="text-xl text-gray-700 whitespace-pre-line">
                  {filteredCards[currentIndex].back}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(prev => prev - 1);
                setShowAnswer(false);
              }
            }}
            disabled={currentIndex === 0}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              currentIndex === 0
                ? 'bg-gray-200 text-gray-400'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex-1 py-4 px-6 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
          >
            {showAnswer ? 'Show Question' : 'Show Answer'}
          </button>
          <button
            onClick={() => {
              if (currentIndex < filteredCards.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setShowAnswer(false);
              }
            }}
            disabled={currentIndex === filteredCards.length - 1}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              currentIndex === filteredCards.length - 1
                ? 'bg-gray-200 text-gray-400'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default FlashCards; 