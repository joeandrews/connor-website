import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import PageTransition from "gatsby-plugin-page-transitions";
import Content, { HTMLContent } from "../components/Content";
import styles from "./blog-post.module.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  location = "UK",
  date = "Dec 2019",
  helmet
}) => {
  console.log(contentComponent, Content);
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      <div className="container">
        <div className={styles.video}>
          <div className={styles.titleRow}>
            <h1 styleName={styles.title}>{title}</h1>
            <p>{`${location}, ${date}`}</p>
          </div>
          <PostContent content={content} />
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <PageTransition>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </PageTransition>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
