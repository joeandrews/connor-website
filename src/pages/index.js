import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Slider from "react-slick";
import PageTransition from "gatsby-plugin-page-transitions";
import GatsbyImage from "gatsby-image";

import Work from "../components/VideoProject.jsx";

export default class IndexPage extends React.Component {
  // we need local state here to control the selected post
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <div className="container">
          {posts.map(({ node: post }, index) => (
            <Work
              title={post.frontmatter.title}
              link={post.fields.slug}
              thumbnail={post.frontmatter.thumbnail}
              date={"Dec 2019"}
              key={post.id}
            />
          ))}
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          tags: { in: ["featured"] }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
