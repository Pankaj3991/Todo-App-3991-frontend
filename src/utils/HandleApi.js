import axios from 'axios';
const baseUrl = "https://fullstack-todo-app3991.onrender.com";
export const getAllToDo = async (setmainTask) =>{
    const {data} = await axios.get(baseUrl);
    setmainTask(data);
}

export const addTodo = async (title,settitle,setmainTask)=>{
    await axios.post(`${baseUrl}/add`,{"task":`${title}`});
    getAllToDo(setmainTask);
    settitle("");
}

export const editTodo = async (id,title, settitle, setmainTask,setisUpdating)=>{
    await axios.put(`${baseUrl}/update/${id}`,{"task":`${title}`,"done":false});
    setisUpdating(false);
    settitle("");
    getAllToDo(setmainTask);
}

export const deleteTodo = async (id,setmainTask)=>{
    await axios.delete(`${baseUrl}/delete/${id}`);
    getAllToDo(setmainTask);
};

export const doneTodo = async (id,setmainTask)=>{
    try{
        await axios.put(`${baseUrl}/update/${id}`,{"done":true});
        getAllToDo(setmainTask);
    }catch(err){
        console.log(err);
    }

}