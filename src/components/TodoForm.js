import React, {useState} from 'react'

function TodoForm(prop) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    };

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a ToDo' value={input} name='text' className='todo-input' onChange={handleChange}/>
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
