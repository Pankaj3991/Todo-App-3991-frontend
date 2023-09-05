import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { addTodo,deleteTodo,doneTodo,editTodo, getAllToDo } from '../../utils/HandleApi';

const TodoForm = () => {
    const [title, settitle] = useState("");
    const [isUpdating,setisUpdating] = useState(false);
    const [id_, setid_] = useState("");
    const [mainTask, setmainTask] = useState([]);

    useEffect(() => {
        getAllToDo(setmainTask);
    }, [])
    
    const deleteHandler = (id) => {
        deleteTodo(id,setmainTask);
    };

    const editHandler = (id,task)=>{
        setisUpdating(true);
        setid_(id);
        settitle(task);
    }

    let renderTask = <div className='NoTask'>No task available</div>
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t) => {
            return (
                <div key={t._id}>
                    <div className={t.done ? "taskShape done" : "taskShape done2"}
                    onClick={()=>{doneTodo(t._id,setmainTask)}}>
                        <div className='textRes'>
                            <ul>
                                <li>
                                    {
                                      t.done ? <del>{t.task}</del> : t.task
                                    }</li>
                            </ul>
                        </div>
                        <div className='alignButtons'>
                            <button className='deleteButton editButton' onClick={() => { editHandler(t._id,t.task);
                             }}>
                                <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: "10px" }} /> Edit
                            </button>
                            <button className='deleteButton' onClick={() => { deleteHandler(t._id) }}>
                                <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="input">
                            <input type="text" name="task" placeholder='Enter Your task' value={title}
                                onChange={(e) => { settitle(e.target.value); }}/>
                            <button type="submit" onClick={
                                isUpdating ? ()=>{editTodo(id_,title,settitle, setmainTask,setisUpdating)} :
                                 ()=>{addTodo(title,settitle,setmainTask)}}
                            >
                                {isUpdating ? "Update" : "Add Task"}
                            </button>
                    </div>
                    <div className="todos">
                        <ul>
                            {renderTask}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm
