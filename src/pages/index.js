import React from 'react';
import PropTypes from 'prop-types';
import Masonry from '../components/Masonry/Masonry';
import Layout from '../components/Layouts/Layout';
import { graphql } from 'gatsby';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(posts);
    return (
      <Layout>
      <section className="section-fullwidth section">
        <div className="container">
          <div className="content">
            <h2 className="bold center">Handpicked Cases</h2>
          </div>
          </div>
          <Masonry posts={posts}/>
          {/* {posts
            .map(({ node: post }) => (
              <div className="content content-mosaik" key={post.id}>
              <Link className="has-text-white" to={post.frontmatter.path}><img src={post.frontmatter.image}/>
              
              <div className="mosaik-element">
                <p className="has-text-weight-bold">      
                    {post.frontmatter.title}
                </p>
                <p className="case-subtitle">
                  {post.frontmatter.manchet}
                </p>
                </div>
                <div className="overlay-mosaik"></div>
                <div className="gradiant"></div>
                </Link>
              </div>
            ))} */}
        
      </section>
      </Layout>
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
