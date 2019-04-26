import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

class App extends Component {
  getRecipie = (e) => {
    e.preventDefault()
    console.log("working!!!")
  }
  render(){
    return (
      <div className ="App">
      <header className="App-header">
      <h1 className= "App-title">Recipie Search</h1>
      </header>
      <Form getRecipie = {this.getRecipie}/>
      </div>
    )
  }
}

export default App
