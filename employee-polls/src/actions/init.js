import { getAllData } from "../shared/api"
import { hideLoading, showLoading } from "./loading";
import { getQuestions } from "./question";
import { getUsers } from "./user";

export function handleGetInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllData().then(({users, questions}) => {
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))
            dispatch(hideLoading())
        })
    }
}