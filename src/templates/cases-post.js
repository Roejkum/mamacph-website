import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layouts/Layout';
import Img from "gatsby-image";




export const CasesPostTemplate = ({
  image,
  title,
  manchet,
  body,
  video,
  helmet,
}) => {
  let imageJsx;
  if( image.childImageSharp !== null ) {
    imageJsx = <Img fluid={image.childImageSharp.fluid} alt={title}/>;
  } else {
    imageJsx= <img src={image.publicURL} alt={title}/>;
  }

  return (
    <Layout>
    <section>
      {helmet || ''}
      <div className="container-fluid wrap case">
        <div className="row vh-100 middle-xs case-row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <h1 className="secondary">
                {title}
              </h1>
              <h4 className="secondary">{manchet}</h4>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </div> 
            <div className="col-xs-12 col-sm-6 col-md-6">
              { imageJsx }
                { video ?
                <div className="videoWrapper">
                  <iframe className="videoIframe" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> 
                : null }
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
      body={post.html}
      helmet={<Helmet title={`${post.frontmatter.title} | Cases`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      video={post.frontmatter.video}
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
        tekst
        video
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
          publicURL
        }
        path
      }
    }
  }
`
