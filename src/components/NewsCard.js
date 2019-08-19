import "../styling/NewsCard.scss";
import React, {Component} from "react";

const NewsCard = props => {
  return (
    <div className="blog-card">
      <div className="meta">
        <ul className="details">
          <li className="author">
            <a href="#">{props.author}</a>
          </li>
          <li className="date">{props.date}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{props.title}</h1>
        <p> {props.description}</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
