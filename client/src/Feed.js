import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";

const Animal = props => React.createElement("animal", props);
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { episodes: [] };
  }
  render() {
    console.log(ReactDOMServer.renderToStaticMarkup(<Animal />));
    return (
      <pre>
        ReactDOMServer.renderToStaticMarkup(
        <Animal />)
      </pre>
    );
  }
}
export default Feed;
