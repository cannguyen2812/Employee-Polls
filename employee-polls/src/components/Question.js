import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Question.css"

const Question = (props) => {
    const {
        id,
        author,
        timestamp,
    } = props.poll
    const navigate = useNavigate();

    const handleOpenQuestionDetail = (id) => {
        navigate(`/questions/${id}`)
    }

    return (
        <div onClick={() => handleOpenQuestionDetail(id)} className="question-card">
            <h3>{author}</h3>
            <h6>{new Date(timestamp).toLocaleString()}</h6>
        </div>
    )
}

const mapStateToProps = ({questions, } , { id }) => {
    const poll = questions[id];
    return  {
        poll
    }
}

export default connect(mapStateToProps)(Question)