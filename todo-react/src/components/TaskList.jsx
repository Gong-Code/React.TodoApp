import { Task } from "./Task"

export const TaskList = ({ tasks, onComplete, onDelete }) => {

    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return (
        <section className="tasks">
            <header className="tasks--header">
                <div>
                    <p>Create tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                
                <div>
                    <p className="textPurple">Completed</p>
                    <span>{completedTasks} of {taskQuantity}</span>
                </div>
            </header>

            <div className="tasks--list">
                {
                    tasks.map(task => {
                        return <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                    })    
                }
            </div>
        </section>
    )
}
