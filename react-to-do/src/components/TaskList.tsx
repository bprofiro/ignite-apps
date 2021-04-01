import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState(false);

  function handleCreateNewTask() {
    if (newTaskTitle) {
      const newTask: Task = {
        id: Math.random(),
        title: newTaskTitle,
        isComplete: false,
      }
      
      setError(false);
      return setTasks([...tasks, newTask]);
    }
    
    return setError(true);
  }

  function handleToggleTaskCompletion(id: number) {
    const allTasks = [...tasks];

    const completedTextIndex = tasks.findIndex(task => task.id === id);
    
    allTasks[completedTextIndex].isComplete = !allTasks[completedTextIndex].isComplete;    

    setTasks(allTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTaks = tasks.filter(task => task.id !== id);

    setTasks(filteredTaks);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <div className="input">
            <input 
              type="text" 
              placeholder="Adicionar novo todo" 
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            {error && <span>Você não pode criar uma task sem título</span>}
          </div>
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}