const HANDLE_ANSWER_OPTION_CLICK = 'HANDLE_ANSWER_OPTION_CLICK'
const HANDLE_RESTART_QUIZ = 'HANDLE_RESTART_QUIZ'

export const handleAnswerOptionClick = (isCorrect) => ({
    type: HANDLE_ANSWER_OPTION_CLICK,
    payload: isCorrect
  });

  export const handleRestartQuiz = () => {
    return {
      type: HANDLE_RESTART_QUIZ
    };
  };