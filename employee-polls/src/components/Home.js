import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import  '../styles/Home.css'

const Home = ( props ) => {
    const navigate = useNavigate();
    const [listPollToShow, setListPollToShow] = useState(props.unAnsweredQuestionIds);
    useEffect(() => {
        if(!props.user) {
            navigate('/login')
        }
    })
    const  [titleListQuestions, setTitleListQuestions] = useState('UnAnswered Polls');
    const handleChangeQuestionsList = (event) => {
        if(event.target.checked === true) {
            setListPollToShow(props.answeredQuestionIds);
            setTitleListQuestions('Answered Polls');
        } else {
            setListPollToShow(props.unAnsweredQuestionIds);
            setTitleListQuestions('UnAnswered Polls');
        }
    }
    return (
        <div>
            <input type="checkbox" onChange={handleChangeQuestionsList} ></input>
            <label>Switch list Polls</label>
            <div className="home-page">
                <div className="question-section">
                    <h1>{titleListQuestions}</h1>
                    <div className="list-question">
                        {listPollToShow && listPollToShow.length > 0 ? (
                            <div style={{display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                        }}>
                                {listPollToShow.map((id) => (
                                    <Question key={id} id={id} />
                                ))}
                            </div>
                        ): (
                            <div>
                                <h3>There is no Poll!</h3>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const sortQuestion =  Object.keys(state.questions).sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp)
    const user = state.login.user
    if(!user) {
        return {
            user, 
        } 
    } else {
        const answeredQuestionIds = sortQuestion.filter((id) => {
            return state.questions[id].optionOne.votes.includes(user.id) || state.questions[id].optionTwo.votes.includes(user.id)
        })
        const unAnsweredQuestionIds = sortQuestion.filter((id) => {
            return !answeredQuestionIds.includes(id)
        })

        return {
            user, 
            answeredQuestionIds,
            unAnsweredQuestionIds
        }
    }
  };

export default connect(mapStateToProps)(Home);