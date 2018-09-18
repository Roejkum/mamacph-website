import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

export const CasesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  image,
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
            <img src={image} alt={title}/>
          </div>
        </div>
      </div>
    </section>
  )
}

CasesPostTemplate.propTypes = {
  title: PropTypes.string,
  // helmet: PropTypes.instanceOf(Helmet),
  helmet: PropTypes.object,
}

const CasesPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CasesPostTemplate
      manchet={post.frontmatter.manchet}
      helmet={<Helmet title={`${post.frontmatter.title} | Cases`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
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
        image
        path
        tags
      }
    }
  }
`
