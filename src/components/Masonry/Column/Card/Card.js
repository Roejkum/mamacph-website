import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Card = (props) => {
   console.log(props.card.node.frontmatter.image.childImageSharp.fluid);
    return (
    <div className="content contentMosaik">
              <AniLink paintDrip duration={1} to={props.card.node.frontmatter.path} hex="#340d6a">
                <Img fluid={props.card.node.frontmatter.image.childImageSharp.fluid} backgroundColor="rgb(206, 199, 203)" alt={props.card.node.frontmatter.title} />
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
                </AniLink>
              </div>
)}

export default Card;