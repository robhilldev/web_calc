import './App.css';
import { Calculator } from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Web Calc</h1>
        </div>
      </header>
      <div className="App-body">
        <Calculator />
      </div>
      <footer className="App-footer">
        <p>Made by robhilldev</p>
      </footer>
    </div>
  );
}

export default App;
