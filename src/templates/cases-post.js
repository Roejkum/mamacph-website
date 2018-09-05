import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const CasesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  manchet,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{manchet}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

CasesPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const CasesPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CasesPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
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
        path
        tags
      }
    }
  }
`
