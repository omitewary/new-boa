import React, { Component, Fragment } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="checkbox" id="check" name="check" value="" />
          <label htmlFor="check">
            <span />
            Show History
          </label>
        </div>
      </div>
    );
  }
}
