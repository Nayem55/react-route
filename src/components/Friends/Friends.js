import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1>You have {friends.length} friends </h1>
        </div>
    );
};

export default Friends;