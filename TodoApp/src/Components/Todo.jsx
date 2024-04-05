import React, { useState } from 'react'
import axios from 'axios';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useEffect } from 'react'
import Loading from './Loading';
import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/app_state/action';
import { setIsError  } from '../redux/app_state/action';
import { patchAddTodo, postAddTodo, setAddTodo } from '../redux/todo/action';
import { ThemeContext } from '@emotion/react';
import ThemeChangeButton from './ThemeChangeButton';

const Todo = () => {

const {app_state, todos} = useSelector((state) => state)  
const{ isLoading, isError}  = app_state
const dispatch = useDispatch()


    const fetchTodo = async() => {
          try{
            dispatch(setIsLoading(true))
          const { data } =   await  axios({
            url : "http://localhost:3000/todos",
            method : "GET",
        });
        dispatch(setIsLoading(false));
        dispatch(setAddTodo(data))
          }catch(error){
            dispatch(setIsLoading(false))
            dispatch(setIsError(true))
             console.log("Error while fetching the todos")
             console.log(err)
          }
    }
    const postTodos = async(newTodo) => {
         try{
            dispatch(setIsLoading(true))
           const res =  await axios({
                url : "http://localhost:3000/todos",
                method : "POST",
                data : newTodo,
                headers : {
                    "Content-Type" : "application/json"
                },
            })
            fetchTodo()
            dispatch(setIsLoading(false))
            dispatch(postAddTodo(res))
         }catch(error){
            dispatch(setIsLoading(false))
            dispatch(setIsError(true))
            console.log("Error while adding Todos");
            console.log(err);
         }
    }
    const patchTodo = async(id, status) => {
        try{
            dispatch(setIsLoading(true))
           const res =  await axios({
                url : `http://localhost:3000/todos/${id}`,
                method : "PATCH",
                data : { status: !status },
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            fetchTodo()
            dispatch(setIsLoading(false))
            dispatch(patchAddTodo(res))
        }catch(error){
            dispatch(setIsLoading(false))
            dispatch(setIsError(true))
            console.log("Error while changing the status of Todo");
            console.log(err);
        }
    }

    useEffect(() => {
     fetchTodo()
    },[])

    const handleTodoStatus = async(id , status) => {
        patchTodo(id, status)
}

    const handleAddTodo = (title) => {
        const newTodo = {
            id : Date.now(),
            title,
            status: false,
        };
       postTodos(newTodo)
    }
  return (
   isLoading? <Loading/> : isError ? <Error/> :  <>
   <ThemeChangeButton/>
   <TodoInput handleAddTodo = {handleAddTodo}/>
    {todos && Array.isArray(todos) && todos.map((el) => (
    <TodoItem key = {el.id} {...el } handleTodoStatus={handleTodoStatus}/>))}
    
   </>
  )
}

export default Todo