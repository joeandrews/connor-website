import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Slider from "react-slick";
import PageTransition from "gatsby-plugin-page-transitions";
import GatsbyImage from "gatsby-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Work from "../components/VideoProject.jsx";

class TagRoute extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        {posts.map(({ node: post }, index) => (
          <Work
            title={post.frontmatter.title}
            link={post.fields.slug}
            thumbnail={post.frontmatter.thumbnail}
            location={post.frontmatter.location}
            key={post.id}
          />
        ))}
      </section>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
            location
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
