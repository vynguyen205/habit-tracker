import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/Queries";


import "../../App.css";

// const data = [
//     {
//         _id: "1",
//         tagName: "Health & Wellness",
//         tagHabit: "Eat",
//         userId: "1",
//     },
//     {
//         _id: "2",
//         tagName: "Health & Wellness",
//         tagHabit: "Sleep",
//         userId: "1",
//     },
//     {
//         _id: "3",
//         tagName: "Health & Wellness",
//         tagHabit: "Exercise",
//         userId: "1",
//     }
// ]

// Show habits tags for a logged in user
const TagList = () => {
    const [tagText, setTagText] = useState('');
    const { data: users, loading } = useQuery(QUERY_USER, {
        fetchPolicy: 'no-cache',
        variables: {
            userId: "62fe9cbb970457d5b9eb5e31"
        }
    });

    console.log(users);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Habit Tags</h1>
                    <ul>
                        {users?.user?.userHabit?.habitTags?.map((data) =>
                        (<li key={data?._id}>
                            <div>
                                <h3>{data?.tagName}</h3>
                                <p>{data?.tagHabits}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </>
    );
}

export default TagList;
