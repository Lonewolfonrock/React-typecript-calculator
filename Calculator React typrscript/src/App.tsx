import React, { useState } from 'react';
import './App.css';
import data from './Componets/data';
import NumbersDisplay from './Componets/Calculator'; // Import the component

function App() {
  const [inputvalues, setInputvalues] = useState('');
  const item: string[] = []; // Change the type to string array to store input values

  const values = data.map((items) => {
    const handelbutton = (value: string) => {
      if (!items.operator) {
        setInputvalues((prevValue) => prevValue + value);
      } else {
        item.push(inputvalues); 
        console.log(item);
        setInputvalues('');
      }
    };

    return (
      <NumbersDisplay
        key={items.id}
        calcValues={items.calcValues}
        id={items.id}
        operator={items.operator}
        handelbutton={() => handelbutton(items.calcValues)}
      />
    );
  });

  return (
    <>
      <div>
        <div className="Main">
          <input type="text" value={inputvalues} onChange={(e) => setInputvalues(e.target.value)}></input>
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
