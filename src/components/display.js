import React,{useEffect,useState} from "react";

const Display= props=>{

   if(props.value)
   {

   

    return (
       
        <div style={{ marginTop:'2%',backgroundColor:'black'}}>
            <h1 style={{margin:'0',padding:'4%'}}> {props.value}</h1>
            <hr></hr>
        </div>
  
    )
}
else{
    return (
       
        <div style={{ marginTop:'0',backgroundColor:'black'}}>
            <h1 style={{margin:'0',padding:'4%'}}> 0</h1>
            
        </div>
  
    )

}
}




export default Display;