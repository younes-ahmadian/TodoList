import React, {useState} from 'react'
import Input from './input';
import TodoList from './todoList';
import _ from 'lodash';

function TodoForm() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = e => {
         e.preventDefault(); 
         setInput('');
     }
 
    const handleChange = e =>{
        setInput(e.target.value);
    }

    const addTodos = todo =>{
        const task = {};
        task["name"] = todo;
        task["id"] = _.uniqueId();
        task["done"] = false;
        const plans = todo ? [task, ...todos] : [...todos]; //Check if something typed or Not
        setTodos(plans);
      } 
   
    const handleEdit = (edited, item) =>{
        const plans = [...todos];
        const index = plans.indexOf(item);
        plans[index].name = edited;
        setTodos(plans);
    }

    const handleDelete = (todo) => {
        const plans = [...todos];
        const result = plans.filter(m => m.id !== todo.id);
        setTodos(result);
    }
      
    const isComplete = (item) => {
        const plans = [...todos];
        const index = plans.indexOf(item);
         plans[index].done = !plans[index].done;
         setTodos(plans);
       }

  return (
    <div className='todoForm p-3'>
        <Input
        onSubmit={handleSubmit}
        value={input}
        onChange={handleChange}
        onClick={() => addTodos(input)}
        />
        <TodoList data={todos}
        onEdit={handleEdit}
        onClose={handleDelete}
        onDone={isComplete}/>
    </div>
    )
}

export default TodoForm