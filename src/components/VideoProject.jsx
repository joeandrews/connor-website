import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styles from "./VideoProject.module.scss";

const VideoProject = ({
  thumbnail,
  link,
  title,
  location = "UK",
  date,
  company,
  isSlim
}) => (
  <div className={`${styles.work} ${isSlim ? styles.isSlim : ''}`}>
    <Link to={link} />
    <div
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${thumbnail})` }}
    />
    <div className={styles.content}>
      <h1 className={styles.meta}>{title}</h1>
    </div>
  </div>
);

export default VideoProject;
