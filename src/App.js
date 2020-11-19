import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import ButtonsComponent from "./ButtonsComponent";

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: "",
          total: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "del"){
          this.backspace()
      }

      else {
        this.setState({
          result: this.state.result + button
        })
      }
      
  };

  calculate = () => {

      var checkResult = ''
      
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace(/--/g,'+')
      }
      else {
        checkResult = this.state.result
      } 

      if(checkResult.includes('x')){
        checkResult = checkResult.replace(/x/g,'*')
      }
      if(checkResult.includes('%')){
        checkResult = checkResult.replace(/%/g,'*0.01')
      }
      if(checkResult.includes('÷')){
        checkResult = checkResult.replace(/÷/g,'/')
      }
      if(checkResult.includes('+/-')){
        checkResult = checkResult.replace('+/-','*(-1)')
      }
     
      if(checkResult == "") {
          this.setState({
              total:  ""
          })    
      }
      else {

          try {
              this.setState({
                  total: (eval(checkResult).toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 10
                  })) + ""
              })
          } catch (e) {
              this.setState({
                  total: "error"
              })
          }
      } 
  };

  reset = () => {
      this.setState({
          result: "",
          total: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div className="calculator-wrapper">
              <div className="calculator-body">
                  <ResultComponent result={this.state.result} total={this.state.total}/>
                  <ButtonsComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;