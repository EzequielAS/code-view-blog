import styled from 'styled-components'

export const Container = styled.header`
   width: 100%;
`

export const Content = styled.div`
    max-width: 1200px;
    width: 96%;
    margin: 1rem auto;
    animation-duration: 1.2s;
    animation-name: appear;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    /* @media (max-width: 375px) {
        justify-content: center;
    } */

    @keyframes appear {
        from {
            opacity: 0;
        }

        to {
           opacity: 1;
        }
    }
`

export const FadeLine = styled.hr`
    border: 0;
    height: 1px;
    background-image: ${({ theme }) => `linear-gradient(to right, transparent, ${theme.colors.onbackgroundFade}, transparent)`};
    animation-duration: 1.2s;
    animation-name: appear;

    @keyframes appear {
        from {
            opacity: 0;
        }

        to {
           opacity: 1;
        }
    }
`

export const Line = styled.div`
    width: 1px;
    height: 1.5rem;
    background: ${({ theme }) => theme.colors.onbackground};
`

export const ContainerLinks = styled.div`
    display: flex;
`
