import React, { useState } from 'react';
import "../App.css";
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import AddHabit from '../components/Habits/addHabit';

// Display all habits for a logged in user
function Habits() {
    const [habits, setHabits] = useState([]);
  const getHabits = async () => {
    const response = await fetch('../../utils/api');
    const data = await response.json();
    setHabits(data);
  }

  React.useEffect(() => {
    getHabits();
  }, []);

    return (
        <>
            <div className="flex-column bg-lightOrange h-[100vh] w-[100vw]">
                <Navbar />
                <Menu />
                <AddHabit />
            </div>
        </>
    );
}

export default Habits;

