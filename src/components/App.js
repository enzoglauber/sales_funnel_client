import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import StagesList from "../components/stage/_list.js";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <StagesList />
  </div>
)

export default App
