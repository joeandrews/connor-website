import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Scrollbars } from "react-custom-scrollbars";
import Measure from "react-measure";

import Navbar from "../components/Navbar";
import "./all.sass";

class TemplateWrapper extends React.Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };
  render() {
    const { width, height } = this.state.dimensions;
    const { children } = this.props;
    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className={"template-wrapper"}>
            <Helmet title="Connor MacLeod | Videographer">
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
              />
            </Helmet>
            <div className="container">
              <Navbar />
              {children()}
            </div>
          </div>
        )}
      </Measure>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
