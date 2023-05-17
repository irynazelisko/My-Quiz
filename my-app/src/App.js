import { questions } from './components/QuestionsList';
import './App.css';
import Quiz from './components/Quiz';
import ScoreSection from './components/ScoreSection';
import store from './stores/Store';
import { connect } from 'react-redux';
import { handleAnswerOptionClick, handleRestartQuiz } from './actions/Actions';

const App = ({
  currentQuestion,
  showScore,
  score,
  handleAnswerOptionClick,
  handleRestartQuiz
}) => {
  const restartQuiz = () => {
    handleRestartQuiz();
  };

  return (
    <div className="app">
      {showScore ? (
        <ScoreSection
          score={score}
          totalQuestions={questions.length}
          handleRestartQuiz={restartQuiz}
        />
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion,
  showScore: state.showScore,
  score: state.score,
});

const mapDispatchToProps = {
  handleAnswerOptionClick,
  handleRestartQuiz
};
export default connect(mapStateToProps, mapDispatchToProps)(App);


