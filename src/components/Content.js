import React from "react";
import PropTypes from "prop-types";
import Measure from "react-measure";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

class Content extends React.Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };
  render() {
    const { width, height } = this.state.dimensions;
    const { content, className, vimeo } = this.props;
    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            style={{
              alignItems: "flex-start",
              paddingRight: "20px !important",
              flexGrow: "1",
              position: "relative",
              width: "70%"
            }}
          >
            <div
              style={{
                padding: "56.25% 0px 0px 0px",
                position: "relative",
                width: "100%"
              }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${vimeo}?title=0&byline=0&portrait=0`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        )}
      </Measure>
    );
  }
}
Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
