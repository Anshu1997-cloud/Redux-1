import { IS_ERROR, IS_LOADING } from "./actionItem"

export const setIsLoading = (payload) => {
     return {type: IS_LOADING, payload}
}
export const setIsError = (payload) => {
    return {type: IS_ERROR, payload}
}