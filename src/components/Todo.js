import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{color: completed ? 'green' : 'red', cursor: 'pointer'}}> {text} </li>
)

export default Todo