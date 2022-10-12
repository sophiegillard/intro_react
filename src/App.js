import Searchbar from './components/Searchbar.js';
import Button from './components/Button.js';
import List from './components/Listtask.js';



function App() {
  return (
    <div className="App">
      <header>
        <h1> My Todo App </h1>
      </header>
      <div className="content">
          <Searchbar />
          <Button />
      </div>
        <div className="tasks">
            <h4>Todos</h4>
            <List />
        </div>
    </div>
  );
}

export default App;
