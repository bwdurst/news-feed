import React from 'react'

function Story(props) {
  return <div className='story'>
    <h3>{props.title}</h3>
    <a href={props.url}>{props.url}</a>
    <p>Author: {props.author}</p>
  </div>
}

export default Story;