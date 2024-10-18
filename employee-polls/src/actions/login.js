export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const REDIRECT = "REDIRECT"

function login(user) {
    return {
        type: LOGIN,
        user
    }
}

function logout() {
    return {
        type: LOGOUT,
    }
}

function redirect(url) {
    return {
        type: REDIRECT,
        url
    }
}

export function handleLogin(user) {
    return (dispatch) => {
        dispatch(login(user))
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(logout())
    }
}

export function handleRedirect(url) {
    return (dispatch) => {
        dispatch(redirect(url))
    }
}