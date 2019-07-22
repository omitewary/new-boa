import React, { Component, Fragment } from "react";
import LandingHeader from "./LandingHeader";
import LandingBody from "./LandingBody";
import LandingFooter from "./LandingFooter";

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <LandingHeader />
        <LandingBody />
      </Fragment>
    );
  }
}
