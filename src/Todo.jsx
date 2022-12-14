import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize `,
    liComplete: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,

}

const Todo = ({ todo, toggleCompleted ,deleteTodo}) => {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className={style.row}>
                <input onChange={() => toggleCompleted(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
                <p onClick={() => toggleCompleted(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
            </div>
            <button className={style.button} onClick={() => deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </li>
    )
}

export default Todo