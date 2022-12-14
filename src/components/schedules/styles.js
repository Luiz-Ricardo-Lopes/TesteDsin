import styled from 'styled-components'

export const CalendarEndSelect = styled.div`
  height: 2.2rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Section = styled.div`
  margin-top: 8rem;

  > p {
    color: #8c655d;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
  }

  > button {
    height: 2.2rem;
    width: 20rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    color: #402313;
    justify-content: center;
    background-color: #a65d33;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
`
