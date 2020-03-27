import React from 'react'
import SearchBox from './SearchBox'
import Story from './Story'
import Comment from './Comment'

class NewsFeedContainer extends React.Component {
  state = {
    results: [],
    type: ""
  }

  // const res = this.state.results

  searchHandler = (searchType, searchValue) => {

    const type = searchType;
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchValue}&tags=${searchType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ results: data.hits, type: type })
      })
  }

  render() {

    const res = this.state.results;

    return <div>
      <SearchBox search={this.searchHandler} />
      <div id="resultContainer">
        {this.state.type === '' ? null : this.state.type === 'story' ? (
          res.map(el => {
            return <Story
              key={+el.objectID}
              author={el.author}
              title={el.title}
              url={el.url}
            />
          })
        ) : (
            res.map(el => {
              return <Comment
                key={el.objectID}
                text={el.comment_text}
                author={el.author}
              />
            })
          )
        }
      </div>
    </div>
  }
}

export default NewsFeedContainer;