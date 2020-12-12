import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [number, setNumber] = useState(0)

  const URL = `https://jsonplaceholder.typicode.com/posts?_start=${number}&_limit=5`

  const renderBlogTitle = blogPost => {
    return (
      <div className="blog-container">
        <div className="blog-section">
          <div className="blog-title">{blogPost.title}</div>
          <div className="blog-content">{blogPost.body}</div>
        </div>
      </div>
    )
  }

  const fetchData = () => {
    axios.get(URL)
    .then (function (response) {
      setBlogPosts(blogPosts.concat(response.data))
    })
    .catch(function(error){
      console.log("error:", error)
    })
  }

  const loadMorePosts = () => {
    setNumber(number + 5)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ( 
    <div>
      <div>
        {blogPosts.map(renderBlogTitle)}
      </div>
      <div onClick={loadMorePosts}>Load More Blog Posts</div>
    </div>
  )
}

export default Blog