import { useParams } from "react-router-dom";

const Post = ({post}) => {
    const { id, name } = useParams();
    return (
      <>
     <h3>{id}</h3>
     <h4>Post Page</h4>
      <p>{post}</p>
      <br/>
      </>
    )
}

export default Post;