import React, { Component } from "react";

export default class Info404 extends Component {
  render() {
    return (
      <div className="info404 col-sm-12 col-lg-6 align-middle">
        <h2>I have bad news for you</h2>
        <p className="mt-4 mb-5 w-75">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button type="button" className="btn btn-dark">
          BACK TO HOMEPAGE
        </button>
      </div>
    );
  }
}
