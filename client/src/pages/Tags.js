import React from 'react';
import "../App.css";
import Tags from '../components/TagsData';

// Display all habits for a logged in user
function userTags() {
    return (
        <div className="flex-column justify-left align-left min-100-vh bg-slate-500">
            <Tags />
        </div>
    );
}

export default userTags;