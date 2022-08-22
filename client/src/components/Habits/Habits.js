import React from "react";
import "../../App.css";

const data = [
    {
        _id: "1",
        name: "Eat",
        description: "Eat healthy",
        userId: "1",
    },
    {
        _id: "2",
        name: "Sleep",
        description: "Sleep well",
        userId: "1",
    },
    {
        _id: "3",
        name: "Exercise",
        description: "Exercise regularly",
        userId: "2",
    },
    {
        _id: "4",
        name: "Meditate",
        description: "Meditate regularly",
        userId: "2",
    }
]

// Show habits for a logged in user
function HabitList() {
    return (
        <>
            {data.map((data) => 
            (<h3 key={data._id}>{data.name},
            {data.description}</h3>)
            )}
        </>
    )
}

export default HabitList;
