import React ,{useEffect, useState}from 'react'
// import {faker}  from '@faker-js/faker'
import axios from 'axios' 
import {Link} from "react-router-dom"
function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    (async () =>  {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data.slice(0, 5))
   })();
  }, [])
   
  const listMarkup = posts.length > 0 ? (
    posts.map(post => (
     <div className='card shadow p-3 mb-5 bg-white rounded' style={{width:"18rem"}} key={post.id} >
      <div className='card-body'>
        <Link to={`/${post.id}`}>
        <h5 className='card-title'>{post.title}</h5>
        </Link>
       
         <p className='card-text'>{post.body}</p>
      </div>
     </div>
   ))
  ) : (<div className='text-center'>No PostS Found</div>)
  return (
    <div className="container">
        <div className="center">Home</div>
        {listMarkup}
        {/* <p>{`${faker.lorem.paragraph()}`}</p> */}

    </div>
   
  )
}

export default Home;