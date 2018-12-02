import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({
  content,
  className,
  vimeo = "https://player.vimeo.com/video/298369471"
}) => (
  <div className={"section"} style={{ height: "100%" }}>
    {content}
    <iframe
      src={vimeo}
      width="100%"
      height="100%"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  </div>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
