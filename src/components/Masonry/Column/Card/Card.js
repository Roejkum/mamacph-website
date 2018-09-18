import React from 'react';
import Link from 'gatsby-link';

const Card = (props) => {
   
    return (
    <div className="content contentMosaik">
              <Link to={props.card.node.frontmatter.path}><img src={props.card.node.frontmatter.image}/>
              
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