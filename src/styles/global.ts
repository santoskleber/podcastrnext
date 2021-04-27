import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #FFF;
    
        --gray-50: #F7F8FA;
        --gray-100: #E6E8EB;
        --gray-200: #AFB2B1;
        --gray-500: #808080;
        --gray-800: #494D4B;
    
        --green-500: #04D361;
        
        --purple-300: #9F75FF;
        --purple-400: #9164FA; 
        --purple-500: #8257E5;
        --purple-800: #6F48C9;
    }

    @media (max-width: 1536px) {
        html{
            font-size: 87.5%;
        }
    }

    body{
        background-color: ${props => props.theme.colors.secondary };
    }

    body, input, textarea, button{
        font: 500 1rem Inter, sans-serif;
        color: ${props => props.theme.texts.basicTextColor }; 
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
        font-family: Lexend, sans-serif;
        color: ${props => props.theme.texts.emphasizedTextColor }; 
    }

    h1{
        font-size: 2rem;
    }

    h2{
        font-size: 1.5rem;
    }

    button{
        cursor: pointer;
    }
`;