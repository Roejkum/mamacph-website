import React, { Component } from 'react';
import './Masonry.scss';
import Column from './Column/Column';

class Masonry extends Component {
    
        state = {
            columns: null,
            maxCards: 3,
            cardColumns: [],
            cardsLoaded: false,
            OGcards: this.props.posts,
            cardsWithLimit: []
        }; 

    windowResizeHandler = () => {
        if (typeof window !== 'undefined') {
            let winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (winWidth <= 600) {
                this.reorder(this.state.cardsWithLimit, 1);
                this.setState({columns: 1});
            } else if (winWidth <= 900) {
                this.reorder(this.state.cardsWithLimit, 2);
                this.setState({columns: 2});
            } else {
                this.reorder(this.state.cardsWithLimit, 3);
                this.setState({columns: 3});
            }
        }
    }
    UNSAFE_componentWillMount() {
        if (typeof window !== 'undefined') {
            const initialWinWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (initialWinWidth <= 600) {
                this.setState({columns: 1});
            } else if (initialWinWidth <= 900) {
                this.setState({columns: 2});
            } else {
                this.setState({columns: 3});
            }
        }
    }
    componentDidMount() {
        const posts = this.state.OGcards;
        const postLimitMax = posts.slice(0,this.state.maxCards);
        this.setState({cardsWithLimit: postLimitMax});
        this.reorder(postLimitMax, this.state.columns);
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", this.windowResizeHandler, false);  
        }
    }
   
    
    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener("resize", this.windowResizeHandler, false);
        }
    }

    reorder = (arr, columns) => {      
        const cols = columns;
        let col = 0;
        let columnsContent = [];
        while(col < cols) {
            const arrayContent = [];
            for(let i = 0; i <= arr.length; i += cols) {
                
                let _val = arr[i + col];
                if (_val !== undefined) {
                    arrayContent.push(_val);
                }  
                
            }
            col++;
            columnsContent.push(arrayContent);

        }
        this.setState({ cardColumns: columnsContent, cardsLoaded: true});
    }

    handleClickLoadMore = () => {
        const maxCards = this.state.maxCards;
        const newMaxCards = maxCards + 3;
        this.setState({
            maxCards: newMaxCards
        });
        const posts = this.state.OGcards;
        const postLimitMax = posts.slice(0,newMaxCards);
        this.setState({cardsWithLimit: postLimitMax});
        this.reorder(postLimitMax, this.state.columns);
    }
    
    render() {
        let columns = <p>loading...</p>;
        columns = this.state.cardColumns.map(column => {
            return <Column 
                        cardsLoaded={this.state.cardsLoaded}
                        key={column[0].node.fields.slug}
                        cards={column} 
                        active={this.state.cardActive} 
                        handleClickCard={this.handleClickCard} />
        });
        return (
            <div>
                <div className="masonryWrapper">
                    {columns}
                    
                </div>
                <div className={this.state.OGcards > this.state.cardsWithLimit? 'center': 'center hidden' }><button className={this.state.OGcards > this.state.cardsWithLimit? 'btn': 'btn hidden' } onClick={this.handleClickLoadMore}>Show more +</button></div>
                
            </div>
        );
    }
}

export default Masonry;