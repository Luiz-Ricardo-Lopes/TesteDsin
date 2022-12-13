import { Container, Form } from "./styles"
import { Input } from "../../components/Input";
import { useState } from "react";
import  DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



export function Details () {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
  <Container>
    <Form>
    <p>Escolha a data do agendamento</p>
    <DatePicker 
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      placeholderText="Selecione uma data."
      dateFormat="dd/MM/yyyy"
    />
    <Input
    type="service"
    label='serviço'
    title="Serviços"
    placeholder="Escolha um serviço"

    />
    <Input
    type="horário"
    label='horário'
    title="Escolha seu horário"
    placeholder="Escolha o melhor horário"

    />


    </Form>
    
    

    
  </Container>
  )
}