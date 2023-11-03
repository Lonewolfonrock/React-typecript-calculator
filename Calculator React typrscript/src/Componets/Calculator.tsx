interface calcprops{
  calcValues:string
  id:number
  operator:boolean
  handelbutton:(value:string)=>void
}

export default function NumbersDisplay(props:calcprops){
  const handelbtn=()=>{
    props.operator?"Not implemented yet":props.handelbutton(props.calcValues)

  
  }

  return(
    <button className="mainbtn" key={props.id} onClick={handelbtn}>{props.calcValues}</button>
  )
  
}


 



