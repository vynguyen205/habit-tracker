import React from "react";
import "../../App.css";

const data = [
    {
        _id: "1",
        name: "School",
        description: "Go to school",
        userId: "1",
    },
    {
        _id: "2",
        name: "Shopping",
        description: "Buy groceries",
        userId: "1",
    },
    {
        _id: "3",
        name: "Study",
        description: "Study for 1 hour",
        userId: "1",
    }
]

// Show habits for a logged in user
function TodoList() {
    return (
        <>
            {data.map((data) => 
            (<h3 key={data._id}>{data.name},
            {data.description}</h3>)
            )}
        </>
    )
}

export default TodoList;
