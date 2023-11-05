interface calcprops{
  calcValues:string
  id:number
  operator:boolean
  handelbutton:(value:string|boolean)=>void
}

export default function NumbersDisplay(props:calcprops){
  const handelbtn=()=>{
    if (props.operator) {
      props.handelbutton(true); 
    } else {
      props.handelbutton(props.calcValues); 
    }
   
  }

  return(
    <button className="mainbtn" key={props.id} onClick={handelbtn}>{props.calcValues}</button>
  )
  
}