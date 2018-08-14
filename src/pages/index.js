import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import PageTransition from 'gatsby-plugin-page-transitions';
import GatsbyImage from 'gatsby-image';

export default class IndexPage extends React.Component {
  // we need local state here to control the selected post
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    const width = window.innerWidth;
    const slidesToShow = Math.floor(width / 400);
    const settings = {
      dots: true,
      infinite: true,
      draggable: false,
      // autoplay: true,
      speed: 1000,
      slidesToShow,

      centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider
          {...settings}
          ref={c => {
            this.slider = c;
            window.slider = c;
          }}
        >
          {posts.map(({node: post}, index) => (
            <div className="content" style={{width: '400px'}} key={post.id}>
              <Link to={post.fields.slug}>
                <div className="slide-index">{`0${index + 1}`}</div>
                <div className="vertical-text">{post.frontmatter.title}</div>
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage: `url(${post.frontmatter.thumbnail})`,
                  }}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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

