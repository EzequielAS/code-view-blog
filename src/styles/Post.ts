import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 96%;
  margin: 3rem auto 4rem auto;
`

export const ImgStyled = styled.img`
  width: 100%;
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
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;
`