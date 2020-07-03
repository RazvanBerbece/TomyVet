import React from "react";
import Media from "react-bootstrap/Media";

import FadeIn from "react-fade-in";

class LatestMerch extends React.Component {

    render() {
        return (
            <>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src={this.props.thumbSrc}
                        alt="Generic placeholder"
                    />
                    <FadeIn transitionDuration={2000}>
                        <Media.Body style={{ marginLeft: "2.33%" }}>
                            <h3>{this.props.title}</h3>
                            <p>{this.props.desc}</p>

                            <div className="latestMerchPriceContainer" style={{width: "175px"}}>
                                <h5> {`${this.props.price} RON`}</h5>
                            </div>
                        </Media.Body>
                    </FadeIn>
                </Media>
                <br />
            </>
        );
    }
}

export default LatestMerch;
