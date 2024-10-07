import React, { useState } from 'react';

const Task = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(''); // Clear input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter( (element,i) => i !== index);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTasks);
  };

  return (
    <div className='task-manager'>
      <h1>Task Manager</h1>
      <input
        type='text'
        value={task}
        onChange={handleInputChange}
        placeholder='Add a new task...'
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => handleCompleteTask(index)}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
