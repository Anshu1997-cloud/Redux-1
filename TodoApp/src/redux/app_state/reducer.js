import { IS_ERROR, IS_LOADING } from "./actionItem";

const defaultState = {
    isLoading: false,
    isError : false,
}

export const appReducer = (prevState = defaultState , action) => {
    console.log(action)
    switch(action.type){
        case IS_LOADING: 
               return { isLoading : action.payload, isError: false};
        case IS_ERROR:
               return { isLoading : false, isError: action.payload};
    default :
        return prevState
    }
}