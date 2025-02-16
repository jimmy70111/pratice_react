
import { useEffect, useState } from 'react';
import './center.css'
const Pratice = () => {

    const [count , setCount] =  useState(10);

    

    const Name = (prop) =>{
        return <h1>  my name is {prop.title} </h1>
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

        </div>
         
        </div>
    );



};


export default Pratice;