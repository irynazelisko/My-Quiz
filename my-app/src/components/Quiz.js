import { connect } from 'react-redux';
import { handleAnswerOptionClick } from '../actions/Actions';

const Quiz = ({questions, currentQuestion, handleAnswerOptionClick}) => {
    const question = questions[currentQuestion];
   
    return (
        <>
            <div className="questions">
                <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                    {question.questionText}
                </div>
            </div>
            <div className="answers">
                {question.answerOptions.map((answerOption, index) => (
                    <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
});

const mapDispatchToProps = {
    handleAnswerOptionClick
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);