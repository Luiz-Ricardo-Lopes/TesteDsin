export function services() {
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

}
