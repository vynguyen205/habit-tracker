import React from "react";
import "../../App.css";

const data = [
    {
        _id: "1",
        tagName: "Health & Wellness",
        tagHabit: "Eat",
        userId: "1",
    },
    {
        _id: "2",
        tagName: "Health & Wellness",
        tagHabit: "Sleep",
        userId: "1",
    },
    {
        _id: "3",
        tagName: "Health & Wellness",
        tagHabit: "Exercise",
        userId: "1",
    }
]

// Show habits for a logged in user
function TagList() {
    return (
        <>
            {data.map((data) => 
            (<h3 key={data._id}>{data.tagName},
            {data.tagHabit}</h3>)
            )}
        </>
    )
}

export default TagList;
