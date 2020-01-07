import React from 'react';
import logo from './logo.svg';
import './App.css';

// components 
import Users from './components/Users'
import Posts from './components/Posts';

function App() {
  console.log()
  return (
    <div className="App">
      <Users />
      <Posts />
    </div>
  );
}

export default App;
