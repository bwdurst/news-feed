import React from 'react'

function Comment(props) {
  return <div className="comment">
    <p>{props.text}</p>
    <h5>{props.author}</h5>
  </div>
}


export default Comment;