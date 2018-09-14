import React from 'react';
import Link from 'gatsby-link';

const Card = (props) => {
   
    return (
    <div className="content content-mosaik">
              <Link className="has-text-white" to={props.card.node.frontmatter.path}><img src={props.card.node.frontmatter.image}/>
              
              <div className="mosaik-element">
                <p className="bold">      
                    {props.card.node.frontmatter.title}
                </p>
                <p className="case-subtitle">
                  {props.card.node.frontmatter.manchet}
                </p>
                </div>
                <div className="overlay-mosaik"></div>
                <div className="gradiant"></div>
                </Link>
              </div>
)}

export default Card;