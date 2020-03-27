import React from 'react'
import './styles.css'

function Comment(props) {
  return <div className="comment">
    <div className='commentBody'>
      <h3>Comment #{props.objectID}</h3>
      <p>{props.text}</p>
    </div>
    <div className='commentDetails'>
      <h5>Author: {props.author}</h5>
      <h5>Story Title: {props.storyTitle}</h5>
      <span>Story Link:</span>
      <a href={props.storyUrl}>{props.storyUrl}</a>
    </div>
  </div>
}


export default Comment;