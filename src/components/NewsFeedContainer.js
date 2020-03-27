import React from 'react'
import SearchBox from './SearchBox'
import Story from './Story'
import Comment from './Comment'
import './styles.css'

class NewsFeedContainer extends React.Component {
  //state used to hold the results of the search and the type of search. Type is used for conditional rendering results in return statement.
  state = {
    results: [],
    type: ""
  }

  //searchHandler receives search params from child component when called
  searchHandler = (searchType, searchValue) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchValue}&tags=${searchType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ results: data.hits, type: searchType })
      })
  }

  render() {
    return <div id='mainContainer'>
      <SearchBox search={this.searchHandler} />
      <div id="resultContainer">
        {this.state.type === '' ? null : this.state.type === 'story' ? (
          this.state.results.map(el => {
            return <Story
              key={el.objectID}
              author={el.author}
              title={el.title}
              url={el.url}
            />
          })
        ) : (
            this.state.results.map(el => {
              return <Comment
                key={+el.objectID}
                objectID={el.objectID}
                author={el.author}
                text={el.comment_text}
                storyTitle={el.story_title}
                storyUrl={el.story_url}
              />
            })
          )
        }
      </div>
    </div>
  }
}

export default NewsFeedContainer;