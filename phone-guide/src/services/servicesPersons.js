import axios from "axios";

const data = axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  return notes
})
console.log(data)