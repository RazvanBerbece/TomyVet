import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import tomyvetLogo from './deliverables/png/script.png';
import tomyvetSymbol from './deliverables/png/symbol.png';

import ImageFadeIn from "react-image-fade-in";
import FadeIn from 'react-fade-in';

class AboutUs extends React.Component {
    
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <br/>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign: "center"}} className="d-none d-lg-block">
                            <ImageFadeIn width={850} height={320} src={tomyvetLogo} opacityTransition={4.5} />
                        </Col>
                        <Col style={{textAlign: "center"}} className="d-lg-none">
                            <ImageFadeIn width={200} height={200} src={tomyvetSymbol} opacityTransition={4.5} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br/>
                            <br/>
                            <br/>
                            <FadeIn transitionDuration={1000} delay={1000}>
                                <hr/>
                            </FadeIn>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-none d-md-block">
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <FadeIn transitionDuration={1750} delay={500}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer sit amet accumsan eros. Nunc mollis odio condimentum auctor lobortis. Vivamus placerat scelerisque lectus, vel dapibus tellus ultrices non. Ut aliquam nibh vitae viverra malesuada. 
                                Nam scelerisque eros sapien, a ultricies elit faucibus vitae. Suspendisse fermentum non neque sed congue. 
                                Nullam tristique augue non mi pellentesque, vel ullamcorper purus luctus. Sed nec sapien ligula. Mauris ac lobortis urna.
                                <br/><br/>
                                Nullam ac lorem a turpis dapibus posuere a ac nunc. Curabitur sagittis semper erat convallis ultrices. 
                                Sed tincidunt libero dolor, vitae dapibus nibh eleifend eget. Nullam sem neque, tempor eu porttitor eget, rutrum vitae lacus. 
                                Duis at lectus ut orci interdum finibus eu sit amet est. Donec vel enim enim. Nunc a est purus. Cras vel libero vel urna pellentesque euismod sed sed nisi. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sit amet nunc sed elementum.
                            </FadeIn>
                        </Col>
                        <Col className="d-none d-md-block">
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

export default AboutUs;