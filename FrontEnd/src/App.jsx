import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setjokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>he kese ho app sbhi</h1>
      <p>joke count: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
