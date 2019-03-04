import React from 'react';
import Link from 'gatsby-link';
import './Jumbotron.scss';
import Img from '../../img/jumbotron.svg';

const Jumbotron = (props) => {
   
    return (
        <section className="jumbotron">
            <img src={Img} className="jumbotron-image" alt="Jumbotron background"/>
            <div className="jumbtron-bg jumbotron-content container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-offset-1">
                    <h1 className="jumbotron-heading">
                        <span className="css-fisw11">
                            <span className="css-3w0cwq big">
                                Design og udvikling
                            </span>
                            <div className="slidingVertical small">
                                <span>lynhurtige websites</span>
                                <span>animationer</span>
                                <span>grafisk design</span>
                            </div>
                        </span>
                    </h1>
                    <a href="mailto:mama@mamacph.dk" className="btn">Kontakt os</a>
                </div>
                <div className="col-xs-12 hidden-xs col-sm-5">
                    <div className="browser none">
                        <div className="dots"></div>
                    </div>

                    <div className="figure">
                        <div className="circle"></div>
                        <div className="square"></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Jumbotron