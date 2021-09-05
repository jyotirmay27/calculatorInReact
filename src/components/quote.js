import React,{useEffect,useState} from "react";
 

function Quote() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://favqs.com/api/qotd")
        .then(res => res.json())
        .then(
          (result) => {
            
            setIsLoaded(true);
            setItems(result);
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("hell2")
          }
        )
    }, [])
  // console.log(items)
  // console.log(items.quote.body)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{textAlign:'center'}}>Loading...</div>;
    } else {
      if(items && (items.length > 0 || items.quote!== undefined) )
      {
      console.log(items)
      return (
        <div style={{textAlign:'center'}}>
         <h3> {items.quote.body} </h3>
           <h5> -{items.quote.author}</h5>
         </div>
        // <ul style={{textAlign:'center'}}>
        //     <li key={2}>
        //     {items.quote.body}
        //     </li>
        //     <li key={1}> -
        //     {items.quote.author} </li>
          
        // </ul>
      );
    }
    else{
      return <div>Loading...</div>;
  }
}
}

  export default Quote;