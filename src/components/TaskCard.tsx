import { Task } from "../interfaces/Task"
import { MouseEventHandler } from "react"
interface Props {
    task: Task
    deleteTask: (id: number) => void;
}


export default function TaskCard ({task, deleteTask}: Props){

    
    return (
        <div className='card card-body bg-secondary rounded-0'>
            <h2>{task.title}</h2>
            <p>id: {task.id}</p>
            <p>{task.description}</p>
            <button onClick={() => task.id && deleteTask(task.id)} className="btn btn-danger">
                Delete
            </button>
        </div>
    )
}