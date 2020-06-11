import React ,{useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {
 
  let [count,setcount]=useState(100)
  let [isMorning, setMorning] = useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Have a Good{isMorning ? 'Morning':'Night'}</h1>
     <Message counter={count}/>
     <br/>
     <button onClick={
       ()=>setcount(count - 1)
    }>
      update counter
      </button>
      <button onClick={()=>setMorning(!isMorning)}>update Day</button>
    </div>
  );
}


