import React, {useState} from 'react';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.test)){
           return; 
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        
    };

    return (
        <div>
            <h1>My Todo List for the Day</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList;
