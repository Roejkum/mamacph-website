import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layouts/Layout';
import Img from "gatsby-image";




export const CasesPostTemplate = ({
  images,
  image,
  title,
  manchet,
  helmet,
}) => {

  return (
    <Layout>
    <section className="no-padding">
      {helmet || ''}
      <div className="container-fluid wrap">
        <div className="row vh-100 middle-xs">
            <div className="col-xs-12 col-sm-6 ">
              <h1>
                {title}
              </h1>
              <p>{manchet}</p>
              
            </div>
            
            <div className="col-xs-12 col-sm-6">
              <Img fluid={image.childImageSharp.fluid} alt={title}/>
            </div>
          </div>
      </div>
    </section>
    </Layout>
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
      images={post.frontmatter.images}
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
        title
        manchet
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid {
              sizes
              srcSet
              aspectRatio
              src
            }
          }
        }
        path
      }
    }
  }
`
