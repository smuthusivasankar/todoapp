import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h3>Add Todo Component</h3>
    <AddTodo />
    <h3> Todo List Component</h3>   
    <VisibleTodoList />
    <hr />
    <h3>Filter List Component</h3>
    <Footer />
  </div>
)

export default App