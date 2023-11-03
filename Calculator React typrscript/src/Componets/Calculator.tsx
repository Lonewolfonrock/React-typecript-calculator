interface calcprops{
  calcValues:string
  id:number
  operator:boolean
}

export default function NumbersDisplay(props:calcprops){
  const handelbtn=()=>{
    console.log(`button id with ${props.operator} was clicked`)
    
  
  }

  return(
    <button className="mainbtn" key={props.id} onClick={handelbtn}>{props.calcValues}</button>
  )
  
}


 



