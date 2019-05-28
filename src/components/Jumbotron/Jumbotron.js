import React from 'react';
import './Jumbotron.scss';
import JumboSvg from './JumboSvg';

const Jumbotron = (props) => {
   
    return (
        <section className="jumbotron">
            {/* <img src={Img} className="jumbotron-image" alt="Jumbotron background"/> */}
            <JumboSvg classes="jumbotron-image" />
            <div className="jumbtron-bg jumbotron-content container-fluid wrap">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
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