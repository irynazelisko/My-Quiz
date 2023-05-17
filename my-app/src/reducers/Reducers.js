import { questions } from "../components/QuestionsList"
const initialState = {
   questions: questions,
   currentQuestion: 0,
   score: 0,
   showScore: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_RESTART_QUIZ':
          return {
            ...state,
            currentQuestion: 0,
            score: 0,
            showScore:false
          };
        case 'HANDLE_ANSWER_OPTION_CLICK':
          const isCorrect = action.payload;
          const updatedScore = isCorrect ? state.score + 1 : state.score;
          const nextQuestion = state.currentQuestion + 1;
          const isQuizFinished = nextQuestion === state.questions.length;
    
          return {
            ...state,
            currentQuestion: isQuizFinished ? state.currentQuestion : nextQuestion,
            score: updatedScore,
            showScore: isQuizFinished
          };
        default:
          return state;
      }
    };
    
export default reducer;

