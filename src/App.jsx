
export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'

function Myname(props){
  return(
    <div style={{backgroundColor:"skyblue",padding:"10px",margin:"10px"}}>
      <h1>{props.myname}</h1>
    </div>
  )
}
var array=["Hari","Poo","Vedhan","Vino"]
createRoot(document.getElementById("root")).render(
  //<Myname myname="Ranjith"/>
  <div>
    {
     array.map(function(item){
     return(<Myname myname={item}></Myname>)
     })
    }
  </div>
)
