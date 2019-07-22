import React, { Component, Fragment } from "react";

export default class CustomerId extends Component {
  render() {
    const { validateCustId, error, custId } = this.props;
    return (
      <Fragment>
        <input
          type="text"
          style={{ height: 38 }}
          className={error ? "input-error" : "form-control"}
          onChange={e => {
            validateCustId(e);
          }}
          value={custId}
        />
      </Fragment>
    );
  }
}
