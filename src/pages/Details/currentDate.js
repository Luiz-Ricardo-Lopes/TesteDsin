export function currentDate() {
  const date = new Date()

  const day = String(date.getDate()).padStart(2, '0')

  const month = String(date.getMonth()).padStart(2, '0')

  const year = date.getFullYear()

  const currentDate = `${day}/${month}/${year}`
}
