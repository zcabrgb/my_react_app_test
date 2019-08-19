import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NewsCard from "./components/NewsCard";

var createComponent = require("react-unit");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("News Card component", () => {
  var component = createComponent.shallow(
    <NewsCard
      picture={"picture"}
      title={"title"}
      description={"txt"}
      url={"url"}
    />
  );

  it("correct picture source", () => {
    var input = component.findByQuery("img")[0];

    expect(input.props.src).toBe("picture");
  });

  it("correct behaviour when pic src is missing", () => {
    var input = component.findByQuery("img")[0];

    expect(input.props.alt).toBe("Picture not available");
  });
});
