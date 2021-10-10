import React from 'react'
import './styles.css'

function Header({todo, setTodo, addNewTodo}) {
    const onChangeInput=(e)=> {
         setTodo({...todo, newTodo:e.target.value, isCompleted:false});
    }

    const onSubmitForm=(e)=> {
        e.preventDefault();
        addNewTodo()
        
    }
    return (
        <div>
            <header className="header">
		      <h1>todos</h1>
		      <form onSubmit={onSubmitForm}>
			<input className="new-todo" placeholder="What needs to be done?" autofocus value={todo.newTodo} onChange={onChangeInput} name="todo"/>
		     </form>
         	</header>
        </div>
    )
}

export default Header
