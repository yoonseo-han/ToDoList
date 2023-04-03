import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
