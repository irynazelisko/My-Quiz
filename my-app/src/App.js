import React, { createContext, useState } from 'react';
import { questions } from './components/QuestionsList';
import './App.css';
import { Quiz } from './components/Quiz';
import { ScoreSection } from './components/ScoreSection';
export { App, QuizContext };

const QuizContext = createContext()

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(isCorrect);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer(null);
    }, 500);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        score,
        handleAnswerOptionClick,
        currentQuestion,
        showScore,
        handleRestartQuiz,
        selectedAnswer,
      }}
    >
      <div className="app">
        {showScore ? (
          <ScoreSection />
        ) : (
          <Quiz />
        )}
      </div>
    </QuizContext.Provider>
  );
}

