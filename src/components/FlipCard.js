import React, { Component } from 'react';
import '../index.css';

class FlipCard extends Component {
    render() {
        return(
            <div className="flip-card" style={{height: this.props.height}}>
                <div className="flip-card-inner">
                    <div className="flip-card-front"
                     style={{
                            backgroundColor: (this.props.frontBgColor ? this.props.frontBgColor : "white"),
                            lineHeight: this.props.height
                            }}>
                        <h5 className="flip-card-title">{this.props.title}</h5>
                    </div>
                    <div className="flip-card-back"
                     style={{backgroundColor: (this.props.backBgColor ? this.props.backBgColor : "white")}}>
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
        
    }
}

export default FlipCard;