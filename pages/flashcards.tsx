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
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());
  const [showReward, setShowReward] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // Get unique subjects for filter
  const subjects = Array.from(new Set(flashcards.map(card => card.subject))).sort();

  // Filter and shuffle flashcards based on selected subject
  useEffect(() => {
    const filtered = flashcards.filter(card => {
      return selectedSubject === 'all' || card.subject === selectedSubject;
    });
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedSubject]);

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
      if (diff > 0 && currentIndex < shuffledCards.length - 1) {
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
    if (e.key === 'ArrowRight' && currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    } else if (e.key === ' ') {
      setShowAnswer(prev => !prev);
    }
  };

  const handleKnowThis = () => {
    const currentCard = shuffledCards[currentIndex];
    setKnownCards(prev => {
      const newSet = new Set(prev);
      newSet.add(currentCard.id);
      return newSet;
    });
    
    // Update streak
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > maxStreak) {
      setMaxStreak(newStreak);
    }

    // Show reward animation
    setShowReward(true);
    setTimeout(() => setShowReward(false), 2000);

    // Move to next card after a short delay
    setTimeout(() => {
      if (currentIndex < shuffledCards.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setShowAnswer(false);
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, shuffledCards.length]);

  if (shuffledCards.length === 0) {
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

  const progress = (knownCards.size / shuffledCards.length) * 100;
  const currentCard = shuffledCards[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MBA 702 Flashcards</h1>
          <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Subject Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col space-y-3">
            <label htmlFor="subject-filter" className="text-lg font-semibold text-gray-700">
              Filter by Topic
            </label>
            <div className="relative">
              <select
                id="subject-filter"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 text-lg appearance-none cursor-pointer hover:border-blue-300 transition-colors"
              >
                <option value="all">All Topics</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {selectedSubject === 'all' 
                ? `Showing all ${shuffledCards.length} flashcards`
                : `Showing ${shuffledCards.length} flashcards from ${selectedSubject}`
              }
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Streak Counter */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-700">Current Streak:</span>
            <span className="text-2xl font-bold text-blue-500">{streak}</span>
            <span className="text-sm text-gray-500">(Best: {maxStreak})</span>
          </div>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Card {currentIndex + 1} of {shuffledCards.length}
        </p>

        <div 
          className={`bg-white rounded-xl shadow-lg p-6 mb-6 cursor-pointer select-none transition-all duration-200 ${
            showReward ? 'scale-105 shadow-xl' : ''
          }`}
          style={{ transform }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className="min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">{currentCard.subject}</span>
              {knownCards.has(currentCard.id) && (
                <span className="text-green-500">✓ Known</span>
              )}
            </div>
            <div className="text-center">
              {!showAnswer ? (
                <h2 className="text-2xl font-semibold text-gray-800">
                  {currentCard.front}
                </h2>
              ) : (
                <p className="text-xl text-gray-700 whitespace-pre-line">
                  {currentCard.back}
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
            onClick={handleKnowThis}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              knownCards.has(currentCard.id)
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            {knownCards.has(currentCard.id) ? 'Already Known!' : 'I Know This!'}
          </button>
          <button
            onClick={() => {
              if (currentIndex < shuffledCards.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setShowAnswer(false);
              }
            }}
            disabled={currentIndex === shuffledCards.length - 1}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              currentIndex === shuffledCards.length - 1
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