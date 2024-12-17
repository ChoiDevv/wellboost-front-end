import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMeesage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000')
    .then((response) => {
      setMeesage(response.data);
    })
    .catch((error) => {
      console.error('에러 발생: ' + error);
    });
  }, []);

  return (
    <div>
      <h1>React + Nest Test</h1>
      <p>서버 응답: {message}</p>
    </div>
  )
}

export default App;
