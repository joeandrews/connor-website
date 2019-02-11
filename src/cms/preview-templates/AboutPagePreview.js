import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate content={widgetFor("body")} />
);

AboutPagePreview.propTypes = {
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
