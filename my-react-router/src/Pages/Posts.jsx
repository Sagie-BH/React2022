import React,{ useEffect, useState } from 'react'
import Post from './Post';

const data = [
    {
      id: 1,
      post: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at.',
    },
    {
      id: 2,
      post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nostrum?',
    },
    {
      id: 3,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nobis?',
    }
  ];



const PostList = () => {
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
       setPosts(data);
    },[])
   
   
     return (
       <>
       <div>PostList</div>
       {posts.map((p) => <Post key={p.id} postId={p.id} post={p.post} />)}
       </>
     )
   }
   
   export default PostList