
import { useEffect, useState } from 'react';
import './center.css'
const Pratice = () => {

    const [count , setCount] =  useState(10);
    const [array , setarr] =  useState([]);
    const [name ,  setName] =  useState({ name: "jimmy" , age: 26,  arr: [1,2,3] });
    const [userInput, SetuserInput] = useState(" ");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
     const [factorial,  setfactorial] = useState();





    //Two sum

    const[twoSumArray, settwoSumArray] = useState([]);
    const[target, settarget] = useState(0);
    const[result, setreult]  = useState([]);





    const handleArrayChange = (value) => {
        const array = value.split(",").map((num) => parseInt(num.trim(), 10));
        settwoSumArray(array);
      };

    const findMin = () =>{

        let currentmin = Infinity;

        for (let index = 0; index < twoSumArray.length; index++) {
            if(twoSumArray[index] < currentmin ){
                currentmin = twoSumArray[index];
            }
            
        }

        setMin(currentmin);



    }


    const fact = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * fact(n - 1);
    };
    


        useEffect(() => {
        if (twoSumArray.length > 0) {
            setMin(Math.min(...twoSumArray)); // Automatically updates min
        }
    }, [twoSumArray]); // Runs whenever twoSumArray changes

    const findMax = () =>{

        let currentmax = -Infinity; 

        for (let index = 0; index < twoSumArray.length; index++) {
            if(twoSumArray[index] > currentmax ){
                currentmax = twoSumArray[index];

            }
            
        }

        setMax(currentmax);


    }



    

    const twoSum = () =>{
        const map = new Map();
        const n  = twoSumArray.length;

        for (let index = 0; index < n; index++) {

            const temp = target -twoSumArray[index];
            
            if(map.has(temp)){
                setreult([map.get(temp), index]);
                return;
            }

            map.set(twoSumArray[index], index);
            
        }

        setreult(["No valid pair found"]);


    }






    

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
                    // value={userInput} 
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
            <p> enter target : </p>
        <input 
                    type="text" 
                    placeholder=" Enter an target to find in the array " 
                    // value={target} 
                    onChange={(e) => settarget( parseInt(e.target.value,10) || 0)} 
                />

<button onClick={() => setfactorial((fact(target))) }>
                Calculate Factorial: {factorial}
            </button>    

  
            <p> enter twoSum Array : </p>
            <input
        type="text"
        placeholder="Enter array (comma-separated)"
        // value={twoSumArray}
        onChange={(e) => handleArrayChange(e.target.value)}
      />
                
                
                
                <button  onClick={twoSum}>  Get twoSum: [{result.join(', ')}]</button>


            <button  onClick={findMin}>  get Min in the array : {min}</button>
            <button onClick={findMax}>  get Max  in the array : {max}</button>



        </div>









        


        </div>
         
        </div>
    );



};


export default Pratice;