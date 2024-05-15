import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        sub应用
        </h1>
        
        <micro-app name='sub' url='http://localhost:2000/src/'></micro-app>
        <h1>
        sub1应用
        </h1>
        <micro-app name='sub1' url='http://localhost:3000/src/'></micro-app>
      </header>
    </div>
  );
}

export default App;
