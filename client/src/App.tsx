import { useEffect, useState } from "react"
import axios from 'axios';

interface resp {
  body: ReadableStream
}

const App = () => {

  const [pr, setPr] = useState([
    {name: 'jeden', cena: 120},
    {name: 'dwa', cena: 220}
  ])

  const [mecz, setMecz] = useState('')

  async function toJSON(body: ReadableStream<Uint8Array> | null) {
    const reader = body!.getReader();

    let wss = ''
  
    await reader.read().then(res => res.value?.forEach(ele =>
      wss += String.fromCharCode(ele)
    ))
    .then(() => setMecz(wss))
  }

  useEffect(() => {
    const ff = async() => {
      const resp = await fetch('http://www.speedwayw.pl/dmp/1993/wrby_1.htm')
      .then(res => toJSON(res.body))
    }

   
  void ff()
  }, [])

  const addPr = () => {
    setPr(prev => [...prev, {name: 'next', cena: prev[prev.length - 1].cena + 10}])
  }

  return (
    <>
      <div>Kalejdoskop</div>
      <ul>
        {pr.map((x, i) => (
          <li key={i}>
            {x.name} {x.cena}
          </li>
        ))}
      </ul>
      <button onClick={addPr}>Add</button>

      <div>
        <h1>MECZ</h1>
        <h4>{mecz}</h4>
      </div>
    </>
  )
}

export default App
