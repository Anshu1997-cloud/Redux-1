import { TOGGLE_THEME } from "./actionItem"

export const toggleTheme = (currentTheme) => {
    // Determine the new theme based on the current theme
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    return {
      type: TOGGLE_THEME,
      payload: newTheme, // Send the new theme as payload
    };
  };