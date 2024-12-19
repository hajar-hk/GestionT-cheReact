import { useState } from "react";

function AddTask({addTask}){
    const [taskText, setTaskText] = useState('');

    const handlSubmit = (e) =>{
        e.preventDefault();
        if(taskText.trim()){//vérifie si le texte de la tâche n'est pas vide ou uniquement constitué d'espaces.
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
                onChange={(e) => setTaskText(e.target.value)}//met à jour l'état taskText chaque fois que l'utilisateur saisit quelque chose dans le champ de texte. Cela permet au composant d'afficher toujours la valeur actuelle de l'entrée
                 /> 
                 <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;