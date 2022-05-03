import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 900;

    span{
        color: ${({ theme }) => theme.colors.primary};
    }

    svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`