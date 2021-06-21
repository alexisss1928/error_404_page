import React, { Component } from "react";
import Scarecrow from "../images/Scarecrow.png";

export default class Image404 extends Component {
  render() {
    return (
      <div className="scarecrow col-sm-12 col-lg-6">
        <img className="img-fluid" src={Scarecrow} alt="" />
      </div>
    );
  }
}
