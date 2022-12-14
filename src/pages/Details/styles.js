import styled from 'styled-components'

export const Container = styled.body`
  background: #d991c0;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  width: 50%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #bf0436;
  > legend {
    font-size: 3.2rem;
    text-align: center;
  }
  > p {
    color: #8c655d;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
  }
`
