import { ADD_TODO, PATCH_TODO, POST_TODO } from "./actionItem"

export const setAddTodo = (payload) => {
     return { type : ADD_TODO, payload}
}

export const postAddTodo = (payload) => {
      return { type : POST_TODO, payload}
}

export const patchAddTodo = (payload) => {
    return { type : PATCH_TODO, payload}
}