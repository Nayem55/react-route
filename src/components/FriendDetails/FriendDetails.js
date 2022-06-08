import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams()
    const [friend,setFriend]=useState({})

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[friendId])
    return (
        <div>
        <h3>Name : {friend.name}</h3>
        <h4>Email : {friend.email}</h4>
        <h5>City : {friend.address?.city}</h5>
        </div>
    );
};

export default FriendDetails;