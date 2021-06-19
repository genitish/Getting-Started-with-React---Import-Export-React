import React from 'react'

function TodoList({todos}) {
    
    return (
        <div>
          {
            todos.map((todo, index) =>{
              return <h4 key = {index}>{todo}  <button >Del</button></h4>
            })
          }
        </div>
    )
}

export default TodoList
