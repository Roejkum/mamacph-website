import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const Card = (props) => {
   
    return (
    <div className="content contentMosaik">
              <Link to={props.card.node.frontmatter.path}>
                <Img fluid={props.card.node.frontmatter.image.childImageSharp.fluid} backgroundColor="black" alt={props.card.node.frontmatter.title} />
              
              <div className="mosaikElement">
                <h3 className="bold mosaikTitle">      
                    {props.card.node.frontmatter.title} 
                </h3>
                <p className="caseSubtitle">
                  {props.card.node.frontmatter.manchet}
                </p>
                </div>
                <div className="overlayMosaik"></div>
                <div className="gradiant"></div>
                </Link>
              </div>
)}

export default Card;