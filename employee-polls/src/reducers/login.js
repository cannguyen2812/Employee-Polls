import { LOGIN, LOGOUT, REDIRECT } from "../actions/login";
import { SAVE_ANSWER, SAVE_QUESTION } from "../actions/question";

const initialState = {
    isLogged : false,
    user : null
}
export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged : true,
                user: action.user
            }
        case SAVE_ANSWER: 
            return {
                ...state,
                user : {
                    ...state.user,
                    answers: {
                        ...state.user.answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_QUESTION: 
            return {
                ...state,
                user : {
                    ...state.user,
                    questions: {
                        ...state.user.questions,
                        [Object.keys(state.user.questions).length]: action.formattedQuestion.id
                    }
                }
            }   
        case LOGOUT:
            return {
                ...state, 
                ...initialState
            }     
        case REDIRECT:
            return {
                ...state,
                ...action
            }    
        default:
            return state;
    }
}