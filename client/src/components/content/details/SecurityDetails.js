import React, { Component, Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";
import LineChart from "../../Charts/LineChart";
import "react-accessible-accordion/dist/fancy-example.css";
export default class SecurityDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='collapsible-wrapper'>
            <Accordion allowMultipleExpanded='true' allowZeroExpanded='true'>
              <AccordionItem className='accordian-item'>
                <AccordionItemHeading>
                  <AccordionItemButton>Financials</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <LineChart />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className='accordian-item'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Historic Price Charts
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className='accordian-item'>
                <AccordionItemHeading>
                  <AccordionItemButton>Company Information</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className='accordian-item'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Stock Advice and Research Report
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Fragment>
    );
  }
}
