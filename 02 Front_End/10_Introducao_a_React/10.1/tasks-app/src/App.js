import './App.css';

const tasks = ['acordar', 'escovar os dentes', 'tomar café', 'alongar', 'correr']; 

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
      <ol>
        {tasks.map(element => Task(element))}
      </ol>
    );
}

export default App;