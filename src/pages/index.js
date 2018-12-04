import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Slider from "react-slick";
import PageTransition from "gatsby-plugin-page-transitions";
import GatsbyImage from "gatsby-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Work from "../components/VideoProject.jsx";
import Pagination from "../components/Pagination.jsx";

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
    var settings = {
      // dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      autoplaySpeed: 1500,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      initialSlide: 0,
      addaptiveHeight: true
    };
    console.log(this.state);
    return (
      <section className="section">
        <Slider
          ref={c => (this.slider = c)}
          afterChange={this.onSlideChange}
          {...settings}
        >
          {posts.map(({ node: post }, index) => (
            <Work
              title={post.frontmatter.title}
              link={post.fields.slug}
              thumbnail={post.frontmatter.thumbnail}
              location={post.frontmatter.location}
              key={post.id}
            />
          ))}
        </Slider>
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
