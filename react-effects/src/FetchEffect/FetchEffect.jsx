import { useEffect, useState } from 'react'


const FetchEffect = () => { 
const [posts, setPosts] = useState([]);

    useEffect(() => {
        let connected = true;
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            alert("Posts Are Ready")
            if(connected) {
                setPosts(data);
            }
            // Work Work Work
        })
        return () => {
            connected = false;
        }
    },[])

  return (
    <div>
        {posts.map((p) => (
            <p key={p.id} id={p.id}>{p.title}</p>
        ))}
    </div>
  )
}

export default FetchEffect