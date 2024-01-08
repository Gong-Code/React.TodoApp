import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const Task = ({ task, onComplete, onDelete }) => {

    return (
        <div className="task">
            <button className="task--check_container" onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={`${task.isCompleted ? 'textCompleted': ''}`}>
                {
                    task.title
                }
            </p>

            <button className='trash--btn'>
                <TbTrash size={20} onClick={() => onDelete(task.id)} />
            </button>
        </div>
    )
}
