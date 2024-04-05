import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionItem";

export const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload}
}

export const loginFailure = (payload) => {
      return { type: LOGIN_FAILURE, payload}
}

export const Logout = (payload) => {
     return { type: LOGOUT, payload}
}