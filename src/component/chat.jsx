import Firstname1 from "./Firstname";
import imageone2 from "../image/imge2.jpeg"
import imageone3 from "../image/imge3.jpeg"
import imageone4 from "../image/imge4.jpeg"
import imageone5 from "../image/img5.jpeg"
import imageone6 from "../image/img6.jpeg"
import imageone7 from "../image/img7.jpeg"
import imageone8 from "../image/img8.jpeg"
import imageone9 from "../image/img9.jpeg"
import imageone from "../image/download.jpeg"



function Chatlist(){
    var books=[{id:9,name:"Jessica Koel", dept:"Hey,Joel, I here to help you out place....",img:imageone2, time:"11:26"},
        {id:2, name:"Komeial Bolger", dept:"I Will send you all documents as soon a...",img:imageone3,time:"11:20"},
        {id:1,name:"Tamaara Suiale", dept:"Are you going to business trip next we...",img:imageone4,time:"11:06"},
        {id:3,name:"Vileon Crk", dept:"Hey, did you finish that React project?....",img:imageone5,time:"10:58"},
        {id:4,name:"Same Nielson", dept:"I am stuck on how to pass props....",img:imageone6,time:"10:53"},
        {id:5,name:"Caroline Nexon", dept:"Try mapping over your array and props....",img:imageone7,time:"10:41"},
        {id:6,name:"Patrick Koeler", dept:"How do I style this element quickly?....",img:imageone8,time:"10:38"},
        {id:7,name:"Piterk Koeler", dept:"Is React hard to learn?...",img:imageone9,time:"10:26"},
        {id:8,name:"Biatph haphaga", dept:"Not at all! Start small, and you...",img:imageone,time:"10:16"},
        {id:10,name:"Jessica Koel", dept:"Hey,Joel, I here to help you out place....",img:imageone2,time:"10:08"},
        {id:11, name:"Komeial Bolger", dept:"I Will send you all documents as soon a...",img:imageone3,time:"09:26"},
        {id:12,name:"Tamaara Suiale", dept:"Are you going to business trip next we...",img:imageone4,time:"09:06"},
        {id:13,name:"Vileon Crk", dept:"Hey, did you finish that React project?....",img:imageone5,time:"08:22"},
        {id:14,name:"Jessica Koel", dept:"Hey,Joel, I here to help you out place....",img:imageone2,time:"07:23"},
        {id:15, name:"Komeial Bolger", dept:"I Will send you all documents as soon a...",img:imageone3,time:"06:26"},
        {id:16,name:"Tamaara Suiale", dept:"Are you going to business trip next we...",img:imageone4,time:"05:11"},
        {id:17,name:"Vileon Crk", dept:"Hey, did you finish that React project?....",img:imageone5,time:"05:26"},
]
    return books.map((item)=>{
        return(
          <Firstname1 key={item.id} name={item.name} dept={item.dept} image={item.img} time={item.time}></Firstname1>
        )
      })
}

export default Chatlist;
