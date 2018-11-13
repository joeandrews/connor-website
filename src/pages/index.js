import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Slider from "react-slick";
import PageTransition from "gatsby-plugin-page-transitions";
import GatsbyImage from "gatsby-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Work from "../components/VideoProject.jsx";

export default class IndexPage extends React.Component {
  // we need local state here to control the selected post
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      initialSlide: 0,
      addaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="section">
        <div className="container">
          <Slider {...settings}>
            {posts.map(({ node: post }, index) => (
              <Work
                title={post.frontmatter.title}
                link={post.fields.slug}
                thumbnail={post.frontmatter.thumbnail}
                date={"Dec 2019"}
                key={post.id}
              />
            ))}
          </Slider>
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
