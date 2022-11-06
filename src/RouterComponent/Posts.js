import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios' 

const Post = ()  => {
   const {post_id}= useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
      (async () =>  {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        setPost(res.data)
     })();
    }, [])

    // console.log()
    // const id = props.post_id
    // console.log(id)
    return (
        <div>
            <div className='card' >
                <h5 className='card-header'>{post.title}</h5>
                <div className='card-body'>
                    <h5 className='card-title'>Here Is Title</h5>
                    <p className='card-text'>{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post