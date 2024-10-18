import { saveQuestion, saveQuestionAnswer } from "../shared/api";
import { formatQuestion } from "../shared/helper";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function saveQuestionAnswerAction({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER,
        authedUser, 
        qid, 
        answer
    }
}

function saveQuestionAction(formattedQuestion) {
    return {
        type: SAVE_QUESTION,
        formattedQuestion
    }
}

export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswerAction(info))

        // return saveQuestionAnswer(info);
    }
}

export function handleSaveQuestion(info) {
    return (dispatch) => {
        const formattedQuestion = formatQuestion(info);
        dispatch(saveQuestionAction(formattedQuestion))

        return saveQuestion(info);
    }
}