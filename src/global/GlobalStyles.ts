import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
        text-rendering: optimizeLegibility;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
            
        }
    }

    body {
        -webkit-font-smoothing: antialiased;   
        background: ${({ theme }) => theme.colors.background};

        /* &::-webkit-scrollbar-track {
            background-color: #FFF;
        }
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: #C3C3C3;
            border-radius: 4px;
        }
        scrollbar-width: thin;
        scrollbar-color: #C3C3C3;
        scrollbar-track-color: #FFF; */
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    [disabled]{
        opacity: 0.4;
        cursor: not-allowed;
    }
`;