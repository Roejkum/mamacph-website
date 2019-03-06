import React from 'react';
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Card = (props) => {
  let image;
  console.log(props.card.node.frontmatter.image);
  if(props.card.node.frontmatter.image.childImageSharp !== null ) {
    image = <Img fluid={props.card.node.frontmatter.image.childImageSharp.fluid} backgroundColor="rgb(206, 199, 203)" alt={props.card.node.frontmatter.title} />;
  } else {
    image = <img src={props.card.node.frontmatter.image.publicURL} alt={props.card.node.frontmatter.title} />;
  }

  return (
  <div className="content contentMosaik">
    <AniLink paintDrip duration={0.5} to={props.card.node.frontmatter.path} hex="#340d6a">
      {/* { props.card.node.frontmatter.image.childImageSharp ?
        <Img fluid={props.card.node.frontmatter.image.childImageSharp.fluid} backgroundColor="rgb(206, 199, 203)" alt={props.card.node.frontmatter.title} />
      :
        <img src={props.card.node.frontmatter.image.publicURL} alt={props.card.node.frontmatter.title} />
      } */}
      {image}
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
  )
}

export default Card;