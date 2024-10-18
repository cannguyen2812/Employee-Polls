import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/QuestionDetail.css"
import { handleSaveQuestionAnswer } from "../actions/question"

const QuestionDetail = (props) => {
    const { id } = useParams();
    const [question, setQuestion] = useState({});
    const [author, setAuthor] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);
    const optionOne = useRef();
    const optionTwo = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if(id && props.loggedUser ) {
            if(isAvailableId(id)) {
                setQuestion(props.questions[id]);
                setAuthor(props.user[props.questions[id].author]);
                if (props.answerIdsOfLoggedUser.includes(id)) {
                    setIsAnswered(true);
                    handleActiveAnswered();
                    handleCaculatePercent();
                }
            } else {
                navigate('/404')
            }
            
        }
        
    }, [props]);

    const isAvailableId = (id) => {
        return Object.keys(props.questions).includes(id)
    }

    const handleActiveAnswered = () => {
        let answer = props.loggedUser.answers[id]
        if (answer === 'optionOne') {
            optionOne.current.classList.add('active');
        } else {
            optionTwo.current.classList.add('active');
        }
    }

    const handleCaculatePercent = (a, b) => {
        let percent = (a * 100) / (a + b)
        return percent
    }

    const selectOption = (ref,nameOption) => {
        if(!isAnswered) {
            ref.current.classList.add('active');
            const authedUser = props.loggedUser.id;
            const qid = id;
            const answer = nameOption;
            const info = {
                authedUser,
                qid,
                answer
            }
            props.dispatch(handleSaveQuestionAnswer(info));
        } 
    }
    

    return (
        <div className="question-detail-page">
            <div>
                <h2>Poll by {author.id}</h2>
                <img alt="" src={author.avatarURL}></img>
                <h3>Would You Rather</h3>
                <div className="answer-options">
                    <div ref={optionOne} onClick={() => { selectOption(optionOne, 'optionOne') }}  className="option">
                        <span>{question.optionOne ? question.optionOne.text : ''}</span>
                    </div>
                    <div ref={optionTwo} onClick={() => { selectOption(optionTwo, 'optionTwo') }}  className="option">
                        <span>{question.optionTwo ? question.optionTwo.text : ''}</span>
                    </div>
                </div>

                {isAnswered === true && (
                    <div>
                        <hr />
                        <h4>There are {question.optionOne.votes.length}
                            (take {handleCaculatePercent(question.optionOne.votes.length, question.optionTwo.votes.length)}%) users select option {question.optionOne.text} and {question.optionTwo.votes.length}
                            (take {handleCaculatePercent(question.optionTwo.votes.length, question.optionOne.votes.length)}%) users select option {question.optionTwo.text}
                        </h4>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (props) => {
    const questions = props.questions;
    const user = props.user;
    const loggedUser = props.login.user;
    const answerIdsOfLoggedUser = props.login.user ? Object.keys(props.login.user.answers) : []

    return {
        questions,
        user,
        loggedUser,
        answerIdsOfLoggedUser
    }
}

export default connect(mapStateToProps)(QuestionDetail)