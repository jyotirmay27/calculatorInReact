import React,{useEffect,useState} from "react";

const Button= props=>{

   

    return (
       
        <button type="button" onClick={props.onClick } className={props.className} 
        style={{ width: `${props.width ||'25%'}`, padding:'5% 9.3%' , border:' none',
        color: 'white',backgroundColor:`${props.backgroundColor ||'default'}`,
        
        textAlign: 'center',
        textDecoration: 'none',
        display:' inline-block',
        borderRadius:'0',
        
        
        }} >
            {props.name}</button>
  
    )
}




export default Button;