import { Container, Form, } from "./styles"
import { CalendarEndSelect, Section } from "../../components/schedules/styles"
import Select  from 'react-select'
import { Input } from "../../components/Input";
import { useState } from "react";
import  DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { currentDate } from "./currentDate";


const services = [
  {value:1, label : "Corte R$:60" },
  {value:2, label : "Escova R$:75" },
  {value:3, label : "Alisamento R$:100" },
  {value:4, label : "Progressiva R$:120" },
  {value:5, label : "Chapinha R$:65"  },
  {value:6, label : "Pintura R$:80" }
  

]
const listServices = services.map(
  (s) => 
  <li key={s.id}> - {s.label} </li>
)

const schedules = [
  {id:1, date : "14-12-2022 09:00", duracao: 60},
  {id:2, date : "14-12-2022 10:00", duracao: 60},
  {id:3, date : "14-12-2022 11:00", duracao: 60},
  {id:4, date : "14-12-2022 12:00", duracao: 60},
  {id:5, date : "14-12-2022 13:00", duracao: 60},
  {id:6, date : "14-12-2022 14:00", duracao: 60}


]

const times = [{value:1, label: "09:00"},
{value:1, label: "10:00"},
{value:1, label: "11:00"},
{value:1, label: "12:00"},
{value:1, label: "13:00"},
{value:1, label: "14:00"},
{value:1, label: "15:00"},
{value:1, label: "16:00"},
{value:1, label: "17:00"},
{value:1, label: "18:00"},
]

let schenduledTimes = []




const listAvailableTimes = schedules.map(
  schedules => 
  schenduledTimes.push(schedules.date.substr(11,6))
  
)
console.log(times.filter(horary => !schenduledTimes.includes(horary)))

export function saveSchendules () {
  
}

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
    
    
  }
  

  const [selectedDate, setSelectedDate] = useState(null)

  
  const [selectedServices, setSelectedServices] = useState(null)
  
  const[selectedTime, setSelectedTime] =useState(null)

  const [savePhone, setSavePhone] = useState("")
  const [saveName, setSaveName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()  
    
    
    dateFormat(selectedDate)   
    
  }
  

  
  return (
  <Container>       
    <Form>
    <p>Escolha a data do agendamento</p>
    
    <CalendarEndSelect>

    
    <DatePicker 
      selected={selectedDate}      
      onChange={date => setSelectedDate(date)}
      selectsStart
      startDate={currentDate}
      placeholderText="Selecione uma data."
      dateFormat="dd/MM/yyyy"
      
    />
        
    <Select
    placeholder="Selecione o serviço"
    options={services} 
    defaultValue={selectedServices}
    onChange={e => setSelectedServices(e.target.value)}
    
    />   

    <Select 
    placeholder="Selecione um horário"
    options={times}
    defaultValue={selectedTime }
    onChange={e => setSelectedTime(e.target.value)} 
    
    />
    </CalendarEndSelect> 
   
    <Section>
   
    <p>Identifique-se</p>
    <Input
    type="tel"
    label='Celular'    
    placeholder="Celular com DDD"
    onChange={e => setSavePhone(e.target.value)} 
    

    />
    <Input
    type="text"
    label='Nome'
    placeholder="Nome do usuário"
    onChange={e => setSaveName(e.target.value)}
    

    />
    <button onClick={handleSubmit}>
      Agendar Serviços
    </button>
    </Section>

    </Form>  
    
    

    
  </Container>
  )
}
