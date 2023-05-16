import React, { useContext } from 'react';
import { QuizContext } from '../App';

export const ScoreSection = () => {
  const { questions, score, handleRestartQuiz } = useContext(QuizContext);

  return (
    <div className="score-section">
      <div className="score">
        You scored {score} out of {questions.length}!
      </div>
      <div>
        <button className="score-button" onClick={handleRestartQuiz}>
          Play again
        </button>
      </div>
    </div>
  );
};

