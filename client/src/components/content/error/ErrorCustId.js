import React, { Component, Fragment } from "react";

export default class ErrorCustId extends Component {
  render() {
    const { errorObj } = this.props;
    return (
      <div>
        <p className="input-error-msg">{errorObj.custIdError}</p>
      </div>
    );
  }
}
