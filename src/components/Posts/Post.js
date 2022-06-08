import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div >
        <div className='posts'>
        {
                posts.map(post=><Link key={post.id} to={`/posts/${post.id}`}>{post.id}</Link>)

            }
        </div>
        <Outlet></Outlet>
        </div>

    );
};

export default Post;