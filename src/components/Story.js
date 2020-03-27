import React from 'react'

function Story(props) {
  return <div>
    <h3>{props.title}</h3>
    <a href={props.url}>{props.url}</a>
    <p>{props.author}</p>
  </div>
}

export default Story;