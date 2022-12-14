import styled from 'styled-components'

export const Container = styled.div`
  background: '#000A0F';
  height: 100vh;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > legend {
    font-size: 3.2rem;
    text-align: center;
  }
  > a {
    color: white;
    font-size: 1.4rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    margin-inline: 0;
    padding: 6.4rem;
  }
`
