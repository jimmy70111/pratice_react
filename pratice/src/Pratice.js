
import { useEffect, useState } from 'react';
import './center.css'
const Pratice = () => {

    const [count , setCount] =  useState(10);
    const [array , setarr] =  useState([]);
    const [name ,  setName] =  useState({ name: "jimmy" , age: 24,  arr: [1,2,3] });
    const [userInput, SetuserInput] = useState(" ");





    //Two sum






    

    const Name = (prop) =>{
        return <h1>  my name is {prop.title} </h1>
    }

    const ChangeArr = () =>{
        setCount( count +1);
        setarr([...array, count]);
    }


    useEffect(() => {
        if (count === 11) {
            setCount(count *300);
        } 
    }, [count]); 


    const changeName = () =>{
        
        setName({...name , age : 26});
    }

    







    return(

        <div>

        <Name title= {name.age}/>
        <h1  className=" reng"> Hello  World </h1>
      

        <div className='but'>
        <button  onClick={ () => { setCount(count +1)}}>  Current Count : {count} </button>
        <button  onClick={ChangeArr}>   Array </button>
        <button  onClick={changeName}>   change age : {name.age} </button>
        <p>Array: [{array.join(', ')}]</p> 
        <h2> {name.arr}</h2>


        <input 
                    type="text" 
                    placeholder="Type something..." 
                    value={userInput} 
                    onChange={(e) => SetuserInput(e.target.value)} 
                />


        <h3 className=' hummy'> show user input : {userInput}</h3>
 
        <input 
                    type="text" 
                    placeholder="Type something..." 
                    value={name.name} 
                    onChange={(e) => setName(  {...name ,name: e.target.value})} 
                />

        <h4> show me  {name.name}</h4>




        <div>  
        <input 
                    type="text" 
                    placeholder="Type something..." 
                    value={userInput} 
                    onChange={(e) => SetuserInput(e.target.value)} 
                />
        </div>








        


        </div>
         
        </div>
    );



};


export default Pratice;