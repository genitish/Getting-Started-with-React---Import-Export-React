import React, { useState } from 'react'
import TodoList from './TodoList';

function Todos(props) {
    var timer ;
    const catchTodo = (e) =>{
        e.persist();
        clearTimeout(timer);
        timer = setTimeout(() =>{
            props.setTodo(e.target.value)
            timer = undefined;
        }, 500);
    }
    // const catchTodo =(e) =>{
    //     props.setTodo(e.target.value)
    // }
    return (
        <div>
            <input type = "text" onChange = {catchTodo} />

            <button onClick ={props.btnHandler}>Add Todo</button>
            <TodoList todos= {props.todos} />
        </div>
    )
}

export default Todos

