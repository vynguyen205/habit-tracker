import React, { useState } from "react";
import "../App.css";
import userData from '../utils/API';

// Get all tags for a logged in user
function Tags() {
    const [tags, setTags] = useState([]);    
    const getTags = async () => {
        const response = await fetch('../utils/api');
        const data = await response.json();
        setTags(data);
    }

    React.useEffect(() => {
        getTags();
    } , []);

    return (
        <>
         <div>
            <a href="/Dashboard">🏠</a>
          </div>
            <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
                <ul>
                    {tags.map(tag => (
                        <li key={tag.id}>
                            {tag.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Tags;
