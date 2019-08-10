import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Posts from "./components/Posts/Posts";

class App extends Component {
  state = {
    posts: null
  };

  componentDidMount = () => {
    // Get a lists of posts
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(r => {
        // Only save first 5 for simplicity
        const posts = r.data.slice(0, 5);
        this.setState({ posts: posts });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render = () => {
    return (
      <div className="App">
        {this.state.posts ? <Posts posts={this.state.posts} /> : null}
      </div>
    );
  };
}

export default App;
