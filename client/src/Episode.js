import React from "react";
import { Link } from "react-router-dom";
export default ({ episode }) => {
  const { id, title, summary, date_published } = episode;
  const date = new Date(date_published);
  const url = `/podcast/${id}`;
  return (
    <div className="list-group-item">
      <Link to={url}>
        <h2 className="list-group-item-heading"> {title} </h2>
      </Link>
      <p className="list-group-item-text">
        {summary ? summary.substring(0, 100) : ""}...
      </p>
      <div className="list-group-item-text">
        <strong> {date.toLocaleDateString()}</strong>
      </div>
    </div>
  );
};
