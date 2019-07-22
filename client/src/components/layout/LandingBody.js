import React, { Component, Fragment } from "react";
import MultiDropDown from "../select/MultiDropDown";
import Checkbox from "../select/Checkbox";
import CustomerId from "../Textbox/CustomerId";
import ErrorCustId from "../content/error/ErrorCustId";
import SubmitBtn from "../button/SubmitBtn";
import SecurityDetails from "../content/details/SecurityDetails";

export default class LandingBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custId: "",
      error: false,
      errorObj: "",
      isSubmitBtnClicked: false
    };
    this.validateCustId = this.validateCustId.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  validateCustId(e) {
    const letters = /^[A-Za-z]+$/;
    let $this = this;
    this.setState({ custId: e.target.value }, () => {
      if (!$this.state.custId.match(letters)) {
        $this.setState({
          error: true,
          errorObj: { custIdError: "Accepts only letters" }
        });
      } else {
        $this.setState({ error: false });
      }
    });
  }

  clickSubmit() {
    this.setState({ isSubmitBtnClicked: true }, () => {});
  }

  checkError() {
    const { error, errorObj } = this.state;
    if (error) return <ErrorCustId errorObj={errorObj} />;
    else return null;
  }

  checkSubmitBtnClicked() {
    const { isSubmitBtnClicked } = this.state;
    if (isSubmitBtnClicked) return <SecurityDetails />;
    else return null;
  }
  render() {
    const { custId, error, isSubmitBtnClicked } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="contact-wrap">
            <form action="" className="contact-form">
              <div className="col-sm-12">
                <div className="input-form-wrapper">
                  <label htmlFor="">Customer ID</label>
                  <CustomerId
                    error={error}
                    custId={custId}
                    validateCustId={this.validateCustId}
                  />
                  {this.checkError()}
                </div>
              </div>
              <div
                className="col-sm-12 default-form-margin"
                style={{ zIndex: 999 }}
              >
                <div className="input-form-wrapper">
                  <label>Securities</label>
                  <MultiDropDown />
                </div>
              </div>
              <div className="col-sm-12 default-form-margin">
                <div className="input-form-wrapper">
                  <Checkbox />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-form-wrapper">
                  <SubmitBtn
                    isSubmitBtnClicked={isSubmitBtnClicked}
                    clickSubmit={this.clickSubmit}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.checkSubmitBtnClicked()}
      </Fragment>
    );
  }
}
