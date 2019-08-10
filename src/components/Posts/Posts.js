import React from "react";

import "./Posts.css";

const posts = props => {
  let posts = null;
  if (props.posts) {
    posts = props.posts.map(p => (
      <div className="post" key={p.id}>
        <h3 className="postTitle">{p.title}</h3>
        <p>{p.body}</p>
      </div>
    ));
  }

  return <div className="postsContainer">{posts}</div>;
};

export default posts;
