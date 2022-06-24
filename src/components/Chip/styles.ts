import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  color: ${({ theme }) => theme.colors.onbackground};
  border: 1px solid ${({ theme }) => theme.colors.onbackground};
  font-size: 0.7rem;
  border-radius: 10px;
  padding: 0.3rem;
  width: max-content;
`