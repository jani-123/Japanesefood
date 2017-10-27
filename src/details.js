import React, { Component } from 'react';
import { addTodo , removeTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   return (
      <div className="">
         <div className="col-md-3 col-xs-12">Imagen</div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);
