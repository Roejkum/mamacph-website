import React, { Component } from 'react';
import './Masonry.css';
import Column from './Column/Column';

class Masonry extends Component {
    constructor() {
        super();
        this.state = {
            columns: null,
            maxCards: 20,
            cardColumns: [],
            cardsLoaded: false,
        }; 
    }
    windowResizeHandler = () => {
        if (typeof window !== 'undefined') {
            let winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (winWidth <= 600) {
                this.reorder(this.props.posts, 1);
            } else if (winWidth <= 900) {
                this.reorder(this.props.posts, 2);
            } else {
                this.reorder(this.props.posts, 3);
            }
        }
    }
    componentWillMount() {
        if (typeof window !== 'undefined') {
            const initialWinWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (initialWinWidth <= 600) {
                this.setState({columns: 1});
                console.log('1 kolonner');
            } else if (initialWinWidth <= 900) {
                this.setState({columns: 2});
                console.log('2 kolonner');
            } else {
                this.setState({columns: 3});
                console.log('3 kolonner');
            }
        }
    }
    componentDidMount() {
        // this.fetchEr();
        this.reorder(this.props.posts, this.state.columns);
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", this.windowResizeHandler, false);  
        }
        console.log('Mount');       
    }
    
    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener("resize", this.windowResizeHandler, false);
        }
    }
    componentDidUpdate() {
        console.log('Update');
    }

    reorder = (arr, columns) => {      
        const cols = columns;
        let col = 0;
        let columnsContent = [];
        while(col < cols) {
            const arrayContent = [];
            for(let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined) {
                    arrayContent.push(_val);
                }  
            }
            col++;
            columnsContent.push(arrayContent);

        }
        this.setState({ cardColumns: columnsContent, cardsLoaded: true});
        console.log(this.state.cardColumns);
    }

    // handleClickCard = (card) => {
    //     this.setState({
    //         cardActive: (this.state.cardActive !== card) ? card : false
    //     })
    // }
    
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
            </div>
        );
    }
}

export default Masonry;