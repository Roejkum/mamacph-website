import React from 'react';

const Card = (props) => {
    const randNumber = Math.floor((Math.random() * 3) + 1);
    const randNumberString = randNumber.toString();
    const animDelay = randNumberString + 's';
    return (
    <div style={{animationDelay: animDelay, animationName: 'card-animation'}} className="card" 
        onClick={()=>props.handleClickCard(props.card)}>
        <div className="media"></div>
        <div>
            <h1>{ props.card.id }</h1>
            <h2>{ props.card.title }</h2>
            <p><strong>{ props.card.title }</strong>{ props.card.body }</p>
        </div>
    </div>
)}

export default Card;