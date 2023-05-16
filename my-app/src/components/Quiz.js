import React, { useContext } from 'react';
import { QuizContext } from '../App';

export const Quiz = () => {
  const { questions, currentQuestion, handleAnswerOptionClick, selectedAnswer } = useContext(QuizContext);

  return (
    <>
      <div className="questions">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answers">
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
            className={
              selectedAnswer !== null
                ? answerOption.isCorrect
                  ? 'button correct'
                  : selectedAnswer === answerOption.isCorrect
                  ? 'button incorrect'
                  : 'button'
                : 'button'
            }
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </>
  );
};