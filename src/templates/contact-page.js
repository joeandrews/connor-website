import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="columns">
        <div className="column ">
          <div className="section">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
