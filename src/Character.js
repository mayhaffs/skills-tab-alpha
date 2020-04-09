import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Character extends React.Component {

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>skills-tab</code>
          </p>
          <button>new character</button>
          <button>load character</button>
          <button>save character</button>
        </header>
      </div>
    );
  }
}

export default Character;
