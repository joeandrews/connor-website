import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import PageTransition from "gatsby-plugin-page-transitions";
import GatsbyImage from "gatsby-image";

import StackGrid, { transitions } from "react-stack-grid";
import Work from "../components/VideoProject.jsx";
import Pagination from "../components/Pagination.jsx";
const { scaleDown } = transitions;

export default class IndexPage extends React.Component {
  // we need local state here to control the selected post
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    currentSlide: 1
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  onSlideChange = currentSlide => {
    this.setState({ currentSlide: currentSlide + 1 });
  };
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    let count = -1;
    const countMap = {
      "-1": "four",
      "0": "one",
      "1": "two",
      "2": "three"
    };
    return (
      <section className="section mainvid">
        {posts.map(({ node: post }, index) => {
          if (count < 2) {
            count++;
          } else {
            count = -1;
          }
          console.log(countMap[count]);

          return (
            <Work
              title={post.frontmatter.title}
              link={post.fields.slug}
              thumbnail={post.frontmatter.thumbnail}
              location={post.frontmatter.location}
              key={post.id}
              index={countMap[count.toString()]}
            />
          );
        })}
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
          tags: { in: ["video"] }
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
