interface calcprops{
  calcValues:string
}

export default function NumbersDisplay(props:calcprops){
  return(
    <button className="mainbtn">{props.calcValues}</button>

  )
  
}


 



