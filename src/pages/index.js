import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Slider from 'react-slick';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      centerMode: true,
      variableWidth: true,
      // focusOnSelect: true,
      slidesToScroll: 1,
    };
    return (
      <section className="section">
        <div className="container">
          <Slider {...settings}>
            {posts.map(({node: post}) => (
              <div className="content" style={{width: '200px'}} key={post.id}>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {/*
                
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
                */}
                </Link>
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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

