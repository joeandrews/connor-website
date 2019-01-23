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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      swipe: false,
      draggable: false,
      initialSlide: 0,
      addaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            swipe: false,
            draggable: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: false
          }
        }
      ]
    };
    return (
      <section className="section">
        <div className="container" style={{ padding: 0 }}>
          {posts.map(({ node: post }, index) => (
            <Work
              title={post.frontmatter.title}
              link={post.fields.slug}
              thumbnail={post.frontmatter.thumbnail}
              location={post.frontmatter.location}
              isSlim={true}
              key={post.id}
            />
          ))}
        </div>
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
