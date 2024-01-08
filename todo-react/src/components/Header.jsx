import { useState } from 'react';
import todoLogo from '../assets/images/todo-logo.png'
import { GoPlusCircle } from "react-icons/go";

export const Header = ({ onAddTask }) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddTask(title)

        setTitle('')
    }

    const onChangeTitle = (e) => {

        setTitle(e.target.value);

    }

    return (
        <div className="header">
            <img src={todoLogo} />
            <h1 className='header--title'>To<span className='header--title_do'>do</span></h1>

            <form onSubmit={handleSubmit} className='header--form'>
                <input placeholder="add a new task" type="text" value={title} onChange={onChangeTitle} />
                <button>
                    Create
                    <GoPlusCircle size={20}/>
                </button>
            </form>
        </div>
    )
}
