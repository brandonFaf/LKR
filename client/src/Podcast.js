import React, { Component } from "react";
import Loader from "./Loader";
import "./Podcast.css";
class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = { episode: {}, loading: true };
  }
  async componentDidMount() {
    const results = await fetch(`/api/episode/${this.props.match.params.id}`);
    const data = await results.json();
    this.setState({
      episode: data.episode[0],
      loading: false
    });
  }
  render() {
    // const { title, url, summary } = this.state.episode;
    return (
      <div>
        {this.state.loading && <Loader />}
        <h2>{this.state.episode.title}</h2>
        <div className="margin">
          <audio ref="audio_tag" src={this.state.episode.url} controls />
        </div>
        <div className="margin">{this.state.episode.summary}</div>
      </div>
    );
  }
}
export default Podcast;
