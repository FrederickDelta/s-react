import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

class Home extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={Pokeball} alt="Pokeball" />
                  </figure>
                </div>
                <header className="media-content">
                  <p className="title is-size-4">
                    <Link to={"/" + post.id}>{post.title}</Link>
                  </p>
                </header>
              </div>
              <div className="content">      
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="">No post yet</div>
    );
    return (
      <div className="container">
        <h4 className="is-size-1 has-text-centered">Hello World</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
