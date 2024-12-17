function Firstname1(props){
    return(
    <div className='chatPart'>
       <div className='profile'>
        <img src={props.image} className='profile__img'></img>
        <div className='profile__det' style={{padding:"2px"}}>
        <h4>{props.name}</h4>
         <p>{props.dept}</p>
        </div>
       </div>
       <div className='timeStar'>
        <p>{props.time}</p>
        <p>⭐</p>
       </div>
     </div>
    
    )
  }
  export default Firstname1;