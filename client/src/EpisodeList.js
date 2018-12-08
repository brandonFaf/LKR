import React, { Component } from "react";
import Episode from "./Episode";
import Loader from "./Loader";
class EpisodeList extends Component {
  constructor(props) {
    super(props);
    this.state = { episodes: [], loading: true };
  }
  async componentDidMount() {
    const results = await fetch("/api/episodes");
    const data = await results.json();
    this.setState({
      episodes: data.episodes,
      loading: false
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">All Episodes</h1>
        <div
          className={"list-group " + (this.state.loading ? "text-center" : "")}
        >
          {this.state.loading && <Loader />}
          {this.state.episodes &&
            this.state.episodes
              .sort((a, b) => b.id - a.id)
              .map(ep => <Episode episode={ep} key={ep.id} />)}
        </div>
      </div>
    );
  }
}
export default EpisodeList;
