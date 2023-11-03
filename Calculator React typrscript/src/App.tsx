import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import data from './Componets/data';
import NumbersDisplay from './Componets/Calculator'; // Import the component

function App() {
  const [inputvalues, setInputvalues] = React.useState('');


  const values = data.map((items) => {
    console.log(`Rendering Calculator for id ${items.id}`);

    const handelbutton=(value: string)=>{
      setInputvalues((prevValue)=> prevValue +value)
    }

    return (
      <NumbersDisplay
        key={items.id}
        calcValues={items.calcValues}
        id={items.id} 
        operator={items.operator}
        handelbutton ={()=>handelbutton(items.calcValues)}
        
      />
    );
  });

  return (
    <>
      <div>
        <div className="Main">
          <input type="Text" value={inputvalues} onChange={(e)=>setInputvalues(e.target.value)}></input>
          <div className="buttons">
            <div>
              {values}
              <button className="mainbtn" id="equalto">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
