import logo from './logo.svg';
import './App.css';
import navbar from "./navbar";
import card from "./card";

function App() {
  return (
    <div className="App">
    <h1>CS 230L</h1>
    <h2>Section - 01</h2>
    <p>WVU ID: 800416929</p>
    <p>Hi I am Ehsan Bahaloo Horeh</p>
    <navbar />
    <div className="container mt-4">
      <card />
    </div>
  </div>
  );
}

export default App;
