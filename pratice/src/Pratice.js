
import { useEffect, useState } from 'react';
import './center.css'
const Pratice = () => {

    const [count , setCount] =  useState(10);
    const [array , setarr] =  useState([]);


    

    const Name = (prop) =>{
        return <h1>  my name is {prop.title} </h1>
    }

    const ChangeArr = () =>{
        setCount( count +1);
        setarr([...array, count]);
    }


    useEffect(() => {
        if (count === 11) {
            setCount(count *3);
        } 
    }, [count]); 







    return(

        <div>

        <Name title= "jimmy"/>
        <h1  className=" reng"> Hello  World </h1>
      

        <div className='but'>
        <button  onClick={ () => { setCount(count +1)}}>  Current Count : {count} </button>
        <button  onClick={ChangeArr}>   Array </button>
        <p>Array: [{array.join(', ')}]</p> 
 

        </div>
         
        </div>
    );



};


export default Pratice;