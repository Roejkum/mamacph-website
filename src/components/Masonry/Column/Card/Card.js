import React from 'react';
import Link from 'gatsby-link';
import styles from './Card.module.css';

const Card = (props) => {
   
    return (
    <div className={[styles.content, styles.contentMosaik].join(' ')}>
              <Link to={props.card.node.frontmatter.path}><img src={props.card.node.frontmatter.image}/>
              
              <div className={styles.mosaikElement}>
                <h3 className={[styles.bold, styles.mosaikTitle].join(' ')}>      
                    {props.card.node.frontmatter.title}
                </h3>
                <p className={styles.caseSubtitle}>
                  {props.card.node.frontmatter.manchet}
                </p>
                </div>
                <div className={styles.overlayMosaik}></div>
                <div className={styles.gradiant}></div>
                </Link>
              </div>
)}

export default Card;