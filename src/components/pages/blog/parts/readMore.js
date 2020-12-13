import React, { useState } from 'react'

const ReadMore = ({ content }) => {
  const [showMore, setShowMore] = useState(false)

  const displayContent = content.substring(0, 100)

  const toggleRead = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      {showMore ? (
        <div className="blog-content">
          {content}
          <span className="read-button" onClick={toggleRead}>Read Less</span>
        </div>
      ) : (
        <div className="blog-content">
          {displayContent}
          <span className="read-button" onClick={toggleRead}>Read More</span>
        </div>
      )}
    </>
  )
}

export default ReadMore