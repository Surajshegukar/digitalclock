
import { useState } from 'react';
import './App.css';


function App() {

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time); 

  const updateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime,1000)
  return (
    <div className='container'>
      <h1>{ctime}</h1>
    </div>
  );
}

export default App;
