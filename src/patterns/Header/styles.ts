import styled from 'styled-components'

export const StickyContainer = styled.div`
 position: sticky;
 top: 0;

 background: ${({ theme }) => theme.colors.background};
`

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 1rem 0;
`

export const Content = styled.div`
    max-width: 1200px;
    width: 96%;
    margin: 0 auto;
    animation-duration: 1.2s;
    animation-name: appear;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

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
