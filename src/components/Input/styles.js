import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: '#C4C4CC';

  > input {
    height: 1.8rem;
    padding: 1rem;
    border: 1px solid #a6688a;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #8c655d;
    background: transparent;
    &::placeholder {
      color: #8c655d;
      font-size: 1.6rem;
    }
  }
`
