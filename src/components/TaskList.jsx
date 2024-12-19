import React, { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
    const nodeRef = useRef(null);// hadi diale transitiongrp

    return (
        <TransitionGroup>
            {tasks.map((task) => (
                <CSSTransition 
                    key={task.id} 
                    nodeRef={nodeRef} 
                    timeout={300} 
                    classNames="task"
                >
                    <div ref={nodeRef}>
                        <TaskItem 
                            task={task}
                            toggleComplete={toggleComplete}
                            deleteTask={deleteTask}
                        />
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

export default TaskList;