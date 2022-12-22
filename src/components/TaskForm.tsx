import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "../interfaces/Task"

interface Props {
    addTask : (task: Task) => void
}

type Handle = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export default function TaskForm (props : Props){
 const [task, setTask] = useState({
    title: '',
    description: ''
 })

 const handleChange = ({ target } : Handle ) => {
    setTask({
        ...task,
       [target.name] : target.value  
    })
 }



 const handleAddTask = (e : FormEvent<HTMLFormElement>) => {
   e.preventDefault()
   props.addTask(task)
   setTask({
    title: '',
    description: ''
   })
 }
    return (
        <div className="card card-body bg-secondary text-white">
            <h1>Add Task</h1>
            <form onSubmit={handleAddTask}>
                <input 
                value={task.title} type={'text'} placeholder={'Write a title'} name='title' className="form-control mb-3 rounded-0 shadow-none border-0"
                onChange={handleChange}/>
                <textarea 
                value={task.description}
                name="description" rows={2} placeholder='Write a description' className='form control mb-3 shadow-none border-0' style={{ width: '300px'}} 
                onChange={handleChange}/>
                <button type='submit' className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    )
}