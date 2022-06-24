import styled from 'styled-components'

export const Container = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.onbackgroundFade};
  margin-top: 3rem;
  padding: 2rem 0;
`

export const Content = styled.div`
  max-width: 1100px;
  width: 96%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Social = styled.a`
  color: ${({ theme }) => theme.colors.onbackground};
  font-size: ${({ theme }) => theme.typography.sizes.small};
`

export const BlogInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
`

export const Anchor = styled.a`
  text-decoration: underline;
`