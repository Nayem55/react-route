import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams()
    const[postDetails,setPostDetails] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    },[postId])

    return (
        <div className='post'>
            <h2>{postDetails.title}</h2>
            <h3>{postDetails.body}</h3>
        </div>
    );
};

export default PostDetails;