import React, { useState } from 'react';
import './App.css';
import data from './Componets/data';
import NumbersDisplay from './Componets/Calculator'; 

function App() {
  const [inputvalues, setInputvalues] = useState('');
  const [item, setItem] = useState<string[]>([]);
  

  const values = data.map((items) => {

    const handelbutton = (value: string) => {
      if (!items.operator) {
        setInputvalues((prevValue) => prevValue + value);
      } else {
        if (items.calcValues === 'C') {
          setInputvalues('');
          setItem([])
        } else if (!items.operator) {
          setInputvalues((prevValue) => prevValue + value);
        } else {
          setItem((prevItem) => [...prevItem, inputvalues, items.calcValues]);
          setInputvalues('');
        }
        
      }
    };
console.log(item)
    


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
