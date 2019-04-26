import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'

const API_KEY = "c63dc9393d58622ca72b8f88fa0d8f96"


class App extends Component {
  getRecipie = async (e) => {
    const recipieName = e.target.elements.recipieName.value
    e.preventDefault()
    const api_call = await fetch
    (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`)

    const data = await api_call.json()
    console.log(data)
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
