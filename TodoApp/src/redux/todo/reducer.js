import { ADD_TODO, PATCH_TODO, POST_TODO } from "./actionItem";

const defaultTodo = []

export const todoReducer = (prevState= defaultTodo, action) => {
    switch(action.type){
         case  ADD_TODO :
            return action.payload
         case  POST_TODO :
            return action.payload
         case  PATCH_TODO :
             return action.payload
        default:
            return prevState;
    }
}