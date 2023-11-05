import React, { useEffect, useState } from 'react';
import './App.css';
import data from './Componets/data';
import NumbersDisplay from './Componets/Calculator'; 

function App() {
  const [inputvalues, setInputvalues] = useState('');
  const [item, setItem] = useState<string[]>([]);

  
  useEffect(() => {
    console.log(item);
    if (item[1] === '+') {
      const num1 = parseFloat(item[0]);
      const num2 = parseFloat(item[2]);
      if (!isNaN(num1) && !isNaN(num2)) {
        const value = num1 + num2;
        setInputvalues(value.toString());
      }
    }
  }, [item]);




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
        }
        else {
          setItem((prevItem) => [...prevItem, inputvalues, items.calcValues]);
          console.log(item)
          setInputvalues('');

        }
        
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
              <button id='equalto' onClick={() => { setItem([...item, inputvalues, '=']);  setTimeout(() => {
    setItem([]);
  }, 1000); }}>=</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

