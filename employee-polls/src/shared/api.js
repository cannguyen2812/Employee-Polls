import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export function getAllData () {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestion (question) {
    return _saveQuestion(question)
}
export function saveQuestionAnswer ({ authedUser, qid, answer }) {
    return _saveQuestionAnswer({ authedUser, qid, answer })
}