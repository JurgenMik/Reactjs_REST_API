import React, {Component} from 'react';
import axios from 'axios';

 export default class PostList extends Component{

    constructor(props) {
        super(props);

        this.state ={
            posts: []
        }
    }

    componentDidMount() {
        // method called after component is rendered (similar to useEffect in functional components)
        // GET request to the API endpoint /posts for posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // returned data is saved into this.state which is defined as an array
            .then(response =>{
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }

    render() {
      // {posts} = the changed state of this.state with the response.data
      // .map is an array method - 2 param (arrow func , and a return)
      const {posts} = this.state
      return(
          <div>
              <h1>List of Posts</h1>
              {
                  posts.map(post => <div key={post.id}> {post.title}</div>)
              }
          </div>
      )
    }
}

