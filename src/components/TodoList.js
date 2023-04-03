import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setToDos] = useState([])

    const addToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) return;

        const newToDos = [todo, ...todos]

        setToDos(newToDos);
        console.log(todo, ...todos);
    }

    return (
    <div>
        <TodoForm onSubmit={addToDo}/>
    </div>
    )
}

export default TodoList
