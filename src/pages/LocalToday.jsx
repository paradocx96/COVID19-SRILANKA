import React, {Component} from 'react';
import ServiceApi from "../services/ServiceApi";
import {Card, Col, Container, Row} from "react-bootstrap";

class LocalToday extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        success: '',
        message: '',
        data: [],
        update_date_time: '',
        local_new_cases: 0,
        local_total_cases: 0,
        local_total_number_of_individuals_in_hospitals: 0,
        local_deaths: 0,
        local_new_deaths: 0,
        local_recovered: 0,
        local_active_cases: 0,
        global_new_cases: 0,
        global_total_cases: 0,
        global_deaths: 0,
        global_new_deaths: 0,
        global_recovered: 0,
        total_pcr_testing_count: 0,
        daily_pcr_testing_data: []
    }

    componentDidMount = async () => {
        await ServiceApi.getAPI()
            .then(response => {
                // console.log(response.data.data)
                this.setState({
                    update_date_time: response.data.data.update_date_time,
                    local_new_cases: response.data.data.local_new_cases,
                    local_total_cases: response.data.data.local_total_cases,
                    local_total_number_of_individuals_in_hospitals: response.data.data.local_total_number_of_individuals_in_hospitals,
                    local_deaths: response.data.data.local_deaths,
                    local_new_deaths: response.data.data.local_new_deaths,
                    local_recovered: response.data.data.local_recovered,
                    local_active_cases: response.data.data.local_active_cases,
                });
            }).catch(error => {
                console.log(error.message);
            });
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <h3>Sri Lanka Total Figures</h3>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Total Confirmed Cases</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_total_cases}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Deaths</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_deaths}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Recovered</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_recovered}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h3>Sri Lanka Daily Figures (Last 24 Hours)</h3>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>New Cases</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_new_cases}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Deaths</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_new_deaths}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Recovered</Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 text-muted">{this.state.local_recovered}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LocalToday;