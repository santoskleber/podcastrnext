import { createContext, useState, ReactNode, useContext } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Theme = {
    title: string;

    colors: {
        primary: string;
        secondary: string;
    }
}

type ThemeContextData = {
    darkEnabled: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({ } as ThemeContextData);

type ThemeContextProviderProps = {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps){
    const [darkEnabled, setDarkEnabled] = useState(false);

    function toggleTheme(){
        setDarkEnabled(!darkEnabled);
    }

    return (
        <ThemeContext.Provider
            value={{
                darkEnabled,
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}