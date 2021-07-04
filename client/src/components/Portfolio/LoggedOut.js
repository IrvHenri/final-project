import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "@material-ui/core/Container";
import "./index.css";
import sampleImage from "../../images/sample-graph.jpg";
export default function LoggedOut() {
  return (
    <div className="portfolio-jumbo">
      <article className="portfolio-signup-article">
        <h1>Sign up Today</h1>
        <h3>Moonshot Portfolio tracker</h3>
        <p>
          Track Crypto Assets and stay up to date with the performance of your
          investments. Profits, losses and portfolio valuations, we've got you
          covered.
        </p>
        <div className="portfolio-signup-links">
          <Button text="Create your Portfolio" />{" "}
          <Link to={"/login"}>Login</Link>
        </div>
      </article>
      <article className="portfolio-graph-article">
        <div>
          <img
            src={sampleImage}
            alt="sample graph"
            className="sample-graph-image"
          />
        </div>
      </article>
    </div>
  );
}
