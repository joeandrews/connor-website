import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content,about, kit, clients, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="columns">
        <div className="column ">
          <div className="section contact-details">
            <h3>contact</h3>
            <p>connor.i.macleod@hotmail.co.uk</p>
            <p>+447754584515</p>
          </div>
          <div className="section contact-details">
            <h3>clients</h3>
            <PageContent className="content" content={clients} />
          </div>
        </div>
        <div className="column ">
          <div className="section contact-details">
            <h3>about</h3>
            <PageContent className="content" content={about} />
          </div>
          <div className="section contact-details">
            <h3>kit</h3>
            <PageContent className="content" content={kit} />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      kit={post.frontmatter.kit}
      about={post.frontmatter.about}
      clients={post.frontmatter.clients}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        about
        kit
        clients
      }
    }
  }
`;
