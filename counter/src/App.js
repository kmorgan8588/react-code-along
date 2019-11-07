import React from 'react';
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
    this.CounterUpdate = this.CounterUpdate.bind(this);
    this.Reset = this.Reset.bind(this);
  }

  Reset() {
    this.setState({
      value: 0,
    })
  }

  CounterUpdate(value) {
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World!
        </h1>  
        <Counter count={this.state.value}/>
        <div>
          <Decrementer state={this.state.value} CounterUpdate={this.CounterUpdate} />
          <Incrementer state={this.state.value} CounterUpdate={this.CounterUpdate} />
          <Reset onClick={this.Reset} />
        </div>
      </div>
    );
  }
  
}

export default App;
