import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../redux/Authentication/actionItem';

const Login = () => {
  const dispatch = useDispatch(); // Initialize dispatch function using useDispatch hook
  const handleLogin = (userData) => {
   return async (dispatch) => {
     try {
       dispatch({ type: 'LOGIN_REQUEST' });
       const response = await axios.post('https://reqres.in/api/login', userData);
       const { token } = response.data;
       localStorage.setItem('token', token);
       dispatch({ type: LOGIN_SUCCESS, payload: token });
     } catch (error) {
       dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
     }
   };
 };
 const handleLogout = () => {
   return async (dispatch) => {
     try {
       localStorage.removeItem('token');
       dispatch({ type: LOGOUT });
     } catch (error) {
       dispatch({ type: LOGIN_FAILURE, payload: error.message });
     }
   };
 };
  return (
    <>
      <LoginForm handleLogin={handleLogin} handleLogout={handleLogout} />
    </>
  );
};

export default Login;