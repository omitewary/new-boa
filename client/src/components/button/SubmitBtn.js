import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";

export default class SubmitBtn extends Component {
  render() {
    const { isSubmitBtnClicked, clickSubmit } = this.props;
    return (
      <Button
        variant={isSubmitBtnClicked ? "secondary no-outline" : "light"}
        onClick={() => {
          clickSubmit();
        }}
      >
        Submit
      </Button>
    );
  }
}
