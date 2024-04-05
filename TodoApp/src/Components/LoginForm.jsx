import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Todo from './Todo';
import {
  Box,
  Flex,
  Stack,
  Input,
  Button,
} from '@chakra-ui/react';

const LoginForm = ({ handleLogin, handleLogout }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    dispatch(handleLogin(email, password));
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    dispatch(handleLogout());
    setIsLoggedIn(false);
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        {isLoggedIn ? (
          <Todo />
        ) : (
          <Stack spacing={3} align="center">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter email....."
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter password...."
            />
            <Button onClick={handleLoginClick}>Login</Button>
            <Button mt={4} onClick={handleLogoutClick}>Logout</Button>
          </Stack>
        )}
    
      </Box>
    </Flex>
  );
};

export default LoginForm;