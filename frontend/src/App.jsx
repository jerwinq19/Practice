import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [sample, setSample] = useState([])

  // use effect
  useEffect(() => {
    const fetchNiggass = () => {
      axios.get('http://127.0.0.1:8000/api/sample/')
        .then(res => {
          setSample(res.data)
        })
    }
    fetchNiggass()
  }, [])


  return (
    <div className="App">
      {sample.map((niggas, key) => (
        <h1 key={key}>{niggas.name}</h1>
      ))}
    </div>
  );
}

export default App;
