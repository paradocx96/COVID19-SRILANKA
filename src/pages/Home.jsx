import React, {Component} from 'react';
import LocalToday from "./LocalToday";
import {Container} from "react-bootstrap";

class Home extends Component {

    render() {
        return (
            <div>
                <Container>
                    <div className={'p-5 text-center'}>
                        <h1>COVID-19 : Live Situational Analysis of Sri Lanka 🇱🇰</h1>
                    </div>

                    <LocalToday/>

                </Container>
            </div>
        );
    }
}

export default Home;