import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { toggleTheme } from '../redux/Theme/action';

const ThemeChangeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const { toggleColorMode } = useColorMode();
    const buttonBgColor = useColorModeValue('blue.500', 'blue.200');

    const handleToggleTheme = () => {
        dispatch(toggleTheme(theme));
        toggleColorMode(); // Toggle Chakra UI color mode
    };

    return (
        <Button onClick={handleToggleTheme} backgroundColor={buttonBgColor}>
            {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </Button>
    );
};

export default ThemeChangeButton;