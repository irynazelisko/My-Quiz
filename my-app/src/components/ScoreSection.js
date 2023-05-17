import { connect } from 'react-redux';
import { handleRestartQuiz } from '../actions/Actions';


const ScoreSection = ({questions, score, handleRestartQuiz}) => {
   
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

const mapStateToProps = (state) => ({
    questions: state.questions,
    score: state.score
})
const mapDispatchToProps = {
    handleRestartQuiz
}


export default connect(mapStateToProps, mapDispatchToProps)(ScoreSection);

