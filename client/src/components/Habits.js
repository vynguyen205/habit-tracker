import React, { useState } from "react";
import { Button } from "reactstrap-bootstrap/Button";
import { Modal } from "reactstrap-bootstrap/Modal";
import "../App.css";

// Get all habits for a logged in user
function Habits() {
    const [habits, setHabits] = useState([]);    
    const getHabits = async () => {
        const response = await fetch('../utils/api');
        const data = await response.json();
        setHabits(data);
    }

    React.useEffect(() => {
        getHabits();
    } , []);

    // Add new habit
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
        <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
            <ul>
                {habits.map(habit => (
                    <li key={habit.id}>
                        <a href={`/Habits/${habit.id}`}>{habit.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}


export default Habits;
