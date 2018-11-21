import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

const Pagination = ({ noSlides, currentSlide, prev, next }) => (
  <div className={styles.pagination}>
    <h5 onClick={prev}>prev</h5>
    <h1>{`${currentSlide}/${noSlides}`}</h1>
    <h5 onClick={next}>next</h5>
  </div>
);

export default Pagination;
