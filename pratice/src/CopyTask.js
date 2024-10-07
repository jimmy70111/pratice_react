    import { useEffect, useState } from "react";


    const CopyTask = () =>{

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);


    const DeleteTask = (index) =>{
        const newtask = tasks.filter((element, i) => i !==index);
        setTasks(newtask);

    }

    const handleChange = (e)=>{
        setTask(e.target.value);
    }

    const addTask = () => {
        if (task) {
            setTasks([...tasks, { task: task, completed: false }]); // Spread the existing tasks
            setTask(''); // Clear the input field after adding the task
        }
    };


    const markComp = (index) =>{
        const mark = tasks.map((item,i) => {
            if( i ===index){ return {...item, completed: !item.completed}
        }
            return item;
        


        });

        setTasks(mark);


    };


    return(
    <div>  
                <h1> current task </h1>


        <div className=" container">
        <input className=" input"
        type="text"
        onChange={handleChange}
        value= {task}
        placeholder=" enter an task to add"
        />
        </div>

        <button onClick={addTask}>enter task</button>

        <div>  Tasks
        <ul>
    {tasks.map((item,index) =>(
                <li key={index}>
                    {item.task}
                    <button onClick={() => DeleteTask(index)}> Delete task </button>

                    <button onClick={() => markComp(index)}> 
                    {item.completed ? 'Undo' : 'Complete'}
                        </button>

                </li>
                

            ))}



            
            </ul>

            </div>
        
        


        

        
        </div>
    );


    }

    export default CopyTask;
