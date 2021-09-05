import React,{useEffect,useState} from "react";
import Button from "./button";
import Display from "./display";

function Card(){
    const [isValueX, setIsValueX] = useState("");

    let x=isValueX,v,k,y;
    
    const buttonclick=e=>{
        
        x=x+e.target.innerText;
        setIsValueX(x);
        //console.log(x);
       
     };
     const buttonclickf=e=>{
        
        
        
        setIsValueX("");
        
       
     };
     const buttonclickff=e=>{
        const myArr = x.split("+");
        const myArr2 = x.split("-");
        const myArr3 = x.split("*");
        const myArr4 = x.split("/");
        
        //z=e.target.innerText;
        console.log(myArr)
        console.log(myArr2)
        console.log(myArr3)
        console.log(myArr4)
        if( myArr !== undefined && myArr.length !== 1 )
        {
            v=parseFloat(myArr[0]);
           y=parseFloat(myArr[1]);
            k=v+y;
            console.log("in plus");
            x=k.toString();
            setIsValueX(x);
        }
        else if( myArr2 !== undefined && myArr2.length !== 1)
        {
            v=parseFloat(myArr2[0]);
           y=parseFloat(myArr2[1]);
            k=v-y;
            x=k.toString();
            setIsValueX(x);
        }
        else if( myArr3 !== undefined && myArr3.length !== 1)
        {
            v=parseFloat(myArr3[0]);
           y=parseFloat(myArr3[1]);
            k=v*y;
            x=k.toString();
            setIsValueX(x);
        }
        else if( myArr4 !== undefined)
        {
            v=parseFloat(myArr4[0]);
            y=parseFloat(myArr4[1]);
             k=v/y;
             x=k.toString();
             setIsValueX(x);
        }
       // setIsValueX(x);
        console.log(x);
       
     };
  
    return (
       
  <div className="card-body" style={{width:'40%', maxheight: '80%' , background: '#282c34' , marginTop:'5%',marginBottom:'10%',marginLeft:'0',padding:'0'}}>
    {/* <h5 classNameName="card-title">Card title</h5>
    <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" classNameName="btn btn-primary">Go somewhere</a> */}
    <Display value={isValueX}/>
    {/* <div className="container">
  <div className="row align-items-start">
    <div className="col">
    <Button  name="1" onClick={buttonclick} />
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
  <div className="row align-items-center">
  <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
  <div className="row align-items-end">
  <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
</div>
</div> */}
    
    <Button  name="1" className="btn btn-secondary" onClick={buttonclick} />
    <Button  name="2" className="btn btn-secondary" onClick={buttonclick} />
    <Button  name="3" className="btn btn-secondary" onClick={buttonclick}/>
    <Button  name="+" className="btn btn-warning" backgroundColor='orange' onClick={buttonclick}/>
    <br></br>
    <Button name="4" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="5" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="6" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="-" className="btn btn-warning" backgroundColor='orange' onClick={buttonclick}/>
    <br></br>
    <Button name="7" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="8" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="9" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="*" className="btn btn-warning" backgroundColor='orange' onClick={buttonclick}/>
    <br></br>
    <Button name="0" className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="." className="btn btn-secondary" onClick={buttonclick}/>
    <Button name="=" className="btn btn-secondary" onClick={buttonclickff}/>
    <Button name="/" className="btn btn-warning" backgroundColor='orange' onClick={buttonclick}/>
    <br></br>
    <Button name="Clear" width="100%" backgroundColor='orange' className="btn btn-warning" onClick={buttonclickf}/>
    <h6>Dear Professor, here is your calculator. Now don't make mistakes like you did with tokyo in season 5 😤😤😤.
        Kuki dil se bura lagta hai😭😭.
    </h6>
   </div>
  


    )
}




export default Card;