import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: '#C4C4CC';

  > input {
    height: 4.8rem;
    padding: 1.4rem;
    border: 1px solid '#7C7C8A';
    border-radius: 0.5rem;
    font-size: 1.6rem;
    background: transparent;
    &::placeholder {
      color: '#7C7C8A';
      font-size: 1.6rem;
    }
  }
`
