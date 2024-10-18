import { GET_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION } from "../actions/question";

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:   
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.id]: action.formattedQuestion
            }    
        default:
            return state;
    }
}