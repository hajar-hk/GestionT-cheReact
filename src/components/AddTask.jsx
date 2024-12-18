import { useState } from "react";

function AddTask({addTask}){
    const [taskText, setTaskText] = useState('');

    const handlSubmit = (e) =>{
        e.preventDefault();
        if(taskText.trim()){
            addTask(taskText);
            setTaskText('');
        }
    }

    return(
        <div>
            <form onSubmit={handlSubmit}>
                <input
                type= "text"
                placeholder="Nouvelle tâche"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                 /> 
                 <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;