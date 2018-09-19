import React from 'react';
import Link from 'gatsby-link';
import './Jumbotron.scss';

const Jumbotron = (props) => {
   
    return (
        <section className="jumbotron">
            <div className="jumbtron-bg">
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-sm-offset-2">
                    <h1>Overskrift!</h1>
                    <p>Lidt lol</p>
                </div>
                <div className="col-xs-12 col-sm-5">
                    <div className="browser">
                        <div className="dots"></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Jumbotron