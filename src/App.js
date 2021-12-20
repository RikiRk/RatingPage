import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import Tabs from "./component/Tabs";
import Table from "./component/Table";



// app
const App = () =>{

  return (
    <>
    <div clasName="page">
      <div>
      <Navbar className="hey"/>
        <div><h2>Something</h2></div>
      <Tabs/>
      </div>
      <div>
        <Table/>
      </div>
    </div>  
    </>
  )
}

export default App

