import React from 'react';
import "../App.css";
import Habits from '../components/Habits/HabitsData';

// Display all habits for a logged in user
function userHabits() {
    return (
        <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
            <Habits />
        </div>
    );
}

export default userHabits;

