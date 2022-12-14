import { Container, Form } from "./styles"
import Select from 'react-select'
import { Input } from "../../components/Input";
import { useState } from "react";
import  DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const services = [
  {id:1, categoria : "Corte", preco: "60", duracao: 60},
  {id:2, categoria : "Escova", preco: "60", duracao: 60},
  {id:3, categoria : "Alisamento", preco: "60", duracao: 60},
  {id:4, categoria : "Progressiva", preco: "60", duracao: 60},
  {id:5, categoria : "Chapinha", preco: "60", duracao: 60},
  {id:6, categoria : "Pintura", preco: "60", duracao: 60}
  

]

const teste = [
  {value:1, label : "Corte R$: 60", },
  {value:2, label : "Escova", },
  {value:3, label : "Alisamento", },
  {value:4, label : "Progressiva", },
  {value:5, label : "Chapinha", },
  {value:6, label : "Pintura", }
  

]
const listServices = services.map(
  (s) => 
  <li key={s.id}> - {s.categoria} - R$:{s.preco} </li>
)

const agendamentos = [
  {id:1, date : "14-12-2022 09:00", duracao: 60},
  {id:2, date : "14-12-2022 10:00", duracao: 60},
  {id:3, date : "14-12-2022 11:00", duracao: 60},
  {id:4, date : "14-12-2022 12:00", duracao: 60},
  {id:5, date : "14-12-2022 13:00", duracao: 60},
  {id:6, date : "14-12-2022 14:00", duracao: 60}


]

const horarios = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

let horariosAgendados = []




const listHorarioDisponiveis = agendamentos.map(
  agendamento => 
  horariosAgendados.push(agendamento.date.substr(11,6))
  
)
console.log(horarios.filter(horario => !horariosAgendados.includes(horario)))













export function Details () {

  
  const dateFormatAux = (date) => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if(month.length < 2)
        month = '0' + month

      if(day.length < 2)
        day = '0' + day

      return [day, month, year].join("-");
  }


  const dateFormat = (date) => {
    console.log(new Date(date))
    
    let formatYearMonthDay = dateFormatAux(date)
    
    console.log(formatYearMonthDay)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    
    
    
    dateFormat(selectedDate)
  }
  

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

    

    
    <Select options={teste} />

    <Input
    type="text"
    label='horário'
    title="Escolha seu horário"
    placeholder="Escolha o melhor horário"
    

    />

    <p>Identifique-se</p>
    <Input
    type="tel"
    label='Celular'    
    placeholder="Celular com DDD"
    size='14'
    

    />
    <Input
    type="text"
    label='Nome'
    placeholder="Nome do usuário"
    

    />
    <button onClick={handleSubmit}>
      Agendar Serviços
    </button>

    </Form>  
    
    

    
  </Container>
  )
}