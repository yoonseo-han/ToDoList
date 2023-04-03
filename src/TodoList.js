import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);
    
    useEffect(() => {
        if(todos.length > 0 )localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function addTodo(text) {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    }

    function toggleTodoCompleted(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    function setFilterValue(newFilter) {
        setFilter(newFilter);
    }
    return (
    <div>
        <div>
            <button onClick={() => setFilterValue('all')}>All</button>
            <button onClick={() => setFilterValue('active')}>Active</button>
            <button onClick={() => setFilterValue('completed')}>Completed</button>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            const newTodoText = e.target.elements.todoText.value;
            if (newTodoText.trim()) {
                addTodo(newTodoText);
                e.target.elements.todoText.value = '';
            }
        }}>
            <input type="text" name="todoText" placeholder="Add a new todo" />
            <button type="submit">Add</button>
        </form>
        <div>
            {todos.filter(todo => {
                if (filter === 'all') {
                return true;
                } else if (filter === 'active') {
                return !todo.completed;
                } else if (filter === 'completed') {
                return todo.completed;
                }
            }).map((todo, index) => (
                <ul className='todo-row' key={index}>
                    <span>{todo.text}</span>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoCompleted(index)} />
                </ul>
            ))}
        </div>
    </div>
    );
}
export default TodoList;
