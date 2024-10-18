import { connect } from "react-redux";
import "../styles/NewQuestion.css"
import { useRef } from "react";
import { handleSaveQuestion } from "../actions/question";
import { useNavigate } from "react-router-dom";

function NewQuestion(props) {
    const optionOne = useRef();
    const optionTwo = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const optionOneText = optionOne.current.value; 
        const optionTwoText= optionTwo.current.value; 
        const author= props.loggedUser.id;

        if(optionOneText && optionTwoText ) {
            props.dispatch(handleSaveQuestion({optionOneText,optionTwoText,author}));
            setTimeout(navigate('/'),1000);
        } else {
            alert('Please fill all field!')
        }
    }

    return(
        <div className="new-question-page">
            <h1>Create your Poll:</h1>
            <h3>Would You Rather?</h3>
            <form>
                <div className="input-section">
                    <div>First Option</div>
                    <input data-testid="optionOneId" ref={optionOne} className="input-field" name="optionOne"  placeholder="Option One"></input>
                </div>
                <div className="input-section">
                    <div>Second Option</div>
                    <input data-testid="optionTwoId" ref={optionTwo} className="input-field" name="optionTwo" placeholder="Option Two"></input>
                </div>
                <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    const loggedUser = state.login ? state.login.user : []
    return {
        loggedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);