import './App.css';
import Button from './components/button.js'
import Input from './components/Input.js'
import ClearButton from './components/ClearButton'
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addZeroInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  }

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  }

  clearText = () => {
    this.setState({input: ""});
  }

  add = () => {
    this.state.previousNumber = this.state.input;
    // this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.state.operator = "plus";
    // this.setState({ operator: "plus" });
  }

  minus = () => {
    this.state.previousNumber = this.state.input;
    // this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.state.operator = "minus";
    // this.setState({ operator: "plus" });
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    // this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.state.operator = "divide";
    // this.setState({ operator: "plus" });
  }

  multi = () => {
    this.state.previousNumber = this.state.input;
    // this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.state.operator = "multi";
    // this.setState({ operator: "plus" });
  }

  eva = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator === "plus")
    {
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator === "minus")
    {
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator === "divide")
    {
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator === "multi")
    {
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handlerClick={this.addToInput}>7</Button>
            <Button handlerClick={this.addToInput}>8</Button>
            <Button handlerClick={this.addToInput}>9</Button>
            <Button handlerClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handlerClick={this.addToInput}>4</Button>
            <Button handlerClick={this.addToInput}>5</Button>
            <Button handlerClick={this.addToInput}>6</Button>
            <Button handlerClick={this.multi}>*</Button>
          </div>
          <div className="row">
            <Button handlerClick={this.addToInput}>1</Button>
            <Button handlerClick={this.addToInput}>2</Button>
            <Button handlerClick={this.addToInput}>3</Button>
            <Button handlerClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handlerClick={this.addDecimal}>.</Button>
            <Button handlerClick={this.addZeroInput}>0</Button>
            <Button handlerClick={this.eva}>=</Button>
            <Button handlerClick={this.minus}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={this.clearText}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
