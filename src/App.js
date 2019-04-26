import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'

const API_KEY = "c63dc9393d58622ca72b8f88fa0d8f96"


class App extends Component {
  state = {
    recipes: []
  }
  getRecipie = async (e) => {
    const recipeName = e.target.elements.recipieName.value
    e.preventDefault()
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)

    const data = await api_call.json()
    this.setState({recipes: data.recipes})
    console.log(this.state.recipes)
  }
  render(){
    return (
      <div className ="App">
      <header className="App-header">
      <h1 className= "App-title">Recipie Search</h1>
      </header>
      <Form getRecipie = {this.getRecipie}/>
      { this.state.recipes.map((recipe) => {
        return <p key ={recipe.recipe_id}>{recipe.title}</p>
      }) }
      </div>
    )
  }
}

export default App
