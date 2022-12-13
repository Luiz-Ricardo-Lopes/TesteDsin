import styled from 'styled-components'

export const Container = styled.div`
  background: '#000A0F';
  height: 100vh;
`

export const Form = styled.form`
  margin-inline: auto;
  padding-block: 6.4rem;
  padding-inline: 2.4rem;
  border-radius: 1.6rem;
  background-color: '#001119';
  max-width: 47.6rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.2rem;
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
