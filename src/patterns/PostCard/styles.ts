import styled from 'styled-components'

type ImageContainerProps = {
    img: string;
}

type ContainerProps = {
    index: number;
}

export const Container = styled.article<ContainerProps>`
    width: calc(50% - 2rem);
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    border-radius: 10px;
    overflow: hidden;
    animation-duration: ${({ index }) => `${0.6 + ((index/10) * 3)}s`};
    animation-name: slidein;

    @media (max-width: 750px) {
        width: 96%;
        margin-bottom: 2rem;
    }

    @keyframes slidein {
        from {
            transform: translateY(30%);
            opacity: 0;
        }

        to {
           transform: translateY(0);
           opacity: 1;
        }
    }
`

export const ImageContainer = styled.div<ImageContainerProps>`
    width: 100%;
    height: 300px;

    background-image: url(${({ img }) => img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Line = styled.div`
    height: 4px;
    width: 80px;
    background: ${({ theme }) => theme.colors.primary};
`

export const PostDatasContainer = styled.div`
    width: 100%;
    height: 250px;
    background: ${({ theme }) => theme.colors.background};
    padding: 1.5rem;

    h2 {
        text-align: center;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const ChipsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`