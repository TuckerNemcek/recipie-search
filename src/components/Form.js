import React from "react"

const Form = props => (
  <form onSubmit = {props.getRecipie}>
    <input type="text" name="recipieName"/>
    <button>Search</button>
  </form>
)

export default Form
