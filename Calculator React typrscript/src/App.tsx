import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './Componets/data'
import NumbersDisplay from './Componets/Calculator'


function App() {
  const values = data.map((items) => {
    console.log(`Rendering Calculator for id ${items.id}`);
    return (
      <NumbersDisplay 
      key={items.id}
      calcValues={items.calcValues}
      />
    );
  });

  return (
    <>
      <div>
      <div className="Main">
       <input type="Text" ></input>
       <div className="buttons">
        <div>
        {values}
        <button className="mainbtn" id='equalto'>=</button>

        </div>
        
       </div>
    </div>
        
      </div>
    </>
  );
}

export default App
