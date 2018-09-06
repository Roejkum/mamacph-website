import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="has-text-weight-bold has-text-centered">UDVALGTE CASES</h2>
          </div>
          {posts
            .map(({ node: post }) => (
              <div className="content content-mosaik" key={post.id}>
              <div className="overlay-mosaik"></div>
              <div className="gradiant"></div>
              <img src={post.frontmatter.image}/>
              <div className="mosaik-element">
                <p >
                  <Link className="has-text-primary" to={post.frontmatter.path}>
                    {post.frontmatter.title}
                    
                  </Link>
                </p>
                <p className="case-subtitle">
                  {post.frontmatter.manchet}
                  <br />
                  <br />
                </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "cases-post" } }}
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
            image
            path
            templateKey
            manchet
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
