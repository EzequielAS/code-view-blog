import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 96%;
  margin: 3rem auto 4rem auto;
`

export const ImgStyled = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
`

export const PostInfo = styled.div`
  margin-top: 1rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 5rem;
  }

  @media (max-width: 670px) {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizes.xlarge};
    }
  }
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;
`

export const PostContent = styled.div``


export const ArticleStyled = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin: 4rem 0 1rem 0;
  }

  p {
    text-align: justify;
  }

  p + p {
    margin-top: 0.5rem;
  }
`

export const ImageArticle = styled.img`
  height: 15rem;
  width: 100%;
  margin-top: 1rem;
  object-fit: contain;
  object-position: center;
`