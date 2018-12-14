import React from 'react';
import PropTypes from 'prop-types';
import Masonry from '../components/Masonry/Masonry';
import Layout from '../components/Layouts/Layout';
import { graphql } from 'gatsby';
import Jumbotron from '../components/Jumbotron/Jumbotron';

import cowiLogo from '../../static/img/clientlogoes/cowi.png';
import FLogo from '../../static/img/clientlogoes/3f-logo-horizontal.png';
import dlfLogo from '../../static/img/clientlogoes/dlf_logo_png_sort.png';
import dlgLogo from '../../static/img/clientlogoes/dlg.png';
import dsbLogo from '../../static/img/clientlogoes/dsb.png';
import egmontLogo from '../../static/img/clientlogoes/Egm_fonden_logo_col_pos_CMYK.png';

import energiLogo from '../../static/img/clientlogoes/energi.png';
import fbLogo from '../../static/img/clientlogoes/fb.png';
import fivuLogo from '../../static/img/clientlogoes/fivu.png';
import kbhLogo from '../../static/img/clientlogoes/kbh.png';
import miljoeLogo from '../../static/img/clientlogoes/miljoe.png';
import panasonicLogo from '../../static/img/clientlogoes/panasonic.png';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { edges: images } = data.allImageSharp
    
    return (
      <Layout>
        <Jumbotron />
      
      
      <section className="section-fullwidth section">
        <div className="row">
          <div className="col-xs-12">
          
          <div className="content-padding">
            <h2 className="bold center secondary">Some of our work</h2>
          </div>
          <Masonry posts={posts} images={images}/>
        </div>
          </div>
      </section>
      <section>
      <div className="row middle-xs clientlogoes">
        <div className="col-xs-12">
            <h2 className="bold center secondary">Trusted by</h2>
          </div>
        
        
          <div className="col-xs-4 col-sm-2"><img src={dlfLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={egmontLogo}/></div>
          
          <div className="col-xs-4 col-sm-2"><img src={FLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={fivuLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={kbhLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={miljoeLogo}/></div>

          <div className="col-xs-4 col-sm-2"><img src={fbLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={cowiLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={energiLogo}/></div>
          
          <div className="col-xs-4 col-sm-2"><img src={dlgLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={dsbLogo}/></div>
          <div className="col-xs-4 col-sm-2"><img src={panasonicLogo}/></div>
        </div>
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
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid {
                  sizes
                  srcSet
                  aspectRatio
                }
              }
            }
            path
            manchet
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fluid {
            srcSet 
          }
        }
      }
    }
  }
`
