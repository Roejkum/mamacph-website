import React from 'react';
import Card from './Card/Card'

const Column = (props) => (   
    <div>
        {props.cards.map( (card, index) => 
            <Card key={index} loaded={props.cardsLoaded} card={card} active={props.active} handleClickCard={props.handleClickCard}/>
        )}
    </div>
)

export default Column; 