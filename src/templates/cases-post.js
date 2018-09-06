import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export const CasesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  manchet,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{manchet}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

CasesPostTemplate.propTypes = {
  manchet: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const CasesPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CasesPostTemplate
      manchet={post.frontmatter.manchet}
      helmet={<Helmet title={`${post.frontmatter.title} | Cases`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

CasesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CasesPost

export const pageQuery = graphql`
  query CasesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        manchet
        heading
        path
        tags
      }
    }
  }
`
