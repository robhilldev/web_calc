//import logo from './logo.svg';
import './App.css';
import { Calculator } from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web Calc</h1>
      </header>
      <div className="App-body">
        <Calculator />
      </div>
      <footer className="App-footer">
        <p>Made by rhd</p>
      </footer>
    </div>
  );
}

export default App;
