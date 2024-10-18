import { SAVE_ANSWER, SAVE_QUESTION } from "../actions/question";
import { GET_USERS } from "../actions/user";

export default function user(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWER:    
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
            case SAVE_QUESTION:
                return {
                    ...state,
                    [action.formattedQuestion.author] : {
                        ...state[action.formattedQuestion.author],
                        questions: {
                        ...state[action.formattedQuestion.author].questions,
                        [state[action.formattedQuestion.author].questions.length]: action.formattedQuestion.id
                        }
                    }
                }     
        default:
            return state;
    }
}