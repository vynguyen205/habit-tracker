import React from 'react';
import "../App.css";
import Todos from '../components/TodosData';

// Display all habits for a logged in user
function userTodos() {
    return (
        <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
            <Todos />
        </div>
    );
}

export default userTodos;