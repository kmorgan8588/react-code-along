import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.jsx';
import Incrementer from './components/incrementer.jsx';
import Decrementer from './components/decrementer.jsx';
import Reset from './components/reset.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

  }
  render() {
    return (
      <div>
        <h1>Hello World!
        </h1>  
        <Counter count={this.state.value}/>
        <div>
          <Decrementer />
          <Incrementer />
          <Reset />
        </div>
      </div>
    );
  }
  
}

export default App;
