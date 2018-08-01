import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import GatsbyImage from 'gatsby-image';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    const settings = {
      dots: true,
      infinite: true,
      draggable: false,
      // autoplay: true,
      speed: 1000,
      slidesToShow: 3,

      // centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
    };
    return (
      <section className="section">
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
                <div className="slide-index">{`0${index + 1}`}</div>
                <div className="vertical-text">{post.frontmatter.title}</div>
                <div
                  className="thumbnail"
                  style={{
                    backgroundImage: `url(${post.frontmatter.thumbnail})`,
                  }}
                />
              </div>
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

