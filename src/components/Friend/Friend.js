import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const navigate = useNavigate();

    const showDetails=()=>{
        const path = `/friends/${friend.id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <button onClick={showDetails}>Details</button>
        </div>
    );
};

export default Friend;