import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';

import Progress from '../images/progress-icon.png';
import './CreateEvent.css'

export default class GeneralInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    clear = e => {
        e.preventDefault();
        this.props.clearForm();

    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <Container fluid className="create-event-page">
                <Row>
                    <Col lg={3} className="top-tag" style={{backgroundColor:"#B8817D"}}> General Information </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Cost and Others </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Review </Col>
                </Row>
                <Container className="top-form">
                    <Row>
                        <Col lg={12}> What is your type of pet? </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Row style={{justifyContent:"space-around", padding:"15px 20% 30px 20%"}}>
                                <Form.Check
                                type="radio"
                                label="Dog"
                                name="petTypeRadios"
                                value="Dog"
                                checked = {values.petType === 'Dog'}
                                onChange={handleChange('petType')}
                                />
                                <Form.Check
                                type="radio"
                                label="Cat"
                                name="petTypeRadios"
                                value="Cat"
                                checked = {values.petType === 'Cat'}
                                onChange={handleChange('petType')}
                                />
                                <Form.Check
                                type="radio"
                                label="Rat"
                                name="petTypeRadios"
                                value="Rat"
                                checked = {values.petType === 'Rat'}
                                onChange={handleChange('petType')}
                                />
                                <Form.Check
                                type="radio"
                                label="Bird"
                                name="petTypeRadios"
                                value="Bird"
                                checked = {values.petType === 'Bird'}
                                onChange={handleChange('petType')}
                                />
                            </Row>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col lg={12}> What is the Title of Your Event?</Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <input value={values.title} className="title-input" name="title-input" placeholder="Birthday party, Beach Meet up, Breeding Experience Talk…." onChange={handleChange('title')}/>
                        </Col>
                    </Row>
                    {/*<Row>
                        <Col lg={12}> What is the Tags of your Event? </Col>
                    </Row>*/}
                </Container> 
                <Container className="bottom-form">
                    <Row>
                        <Col lg={12}> When will this Event be? </Col>
                    </Row>
                    <Row className="time">
                        <Col lg ={6} xs={12}>
                            Start Time &nbsp;&nbsp; <input value={values.startTime} name="start-time" type="time" onChange={handleChange('startTime')}/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Time &nbsp;&nbsp;<input value={values.endTime} name="end-time" type="time" onChange={handleChange('endTime')}/>
                        </Col>
                    </Row>
                    <Row className="date">
                        <Col lg ={6} xs={12}>
                            Start Date &nbsp;&nbsp;&nbsp;<input value={values.startDate} type="date" name="start-date" onChange={handleChange('startDate')}/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Date &nbsp;&nbsp;<input value={values.endDate} name="end-date" type="date" onChange={handleChange('endDate')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> Where will this Event be held?</Col>
                    </Row>
                    <Row>
                        <Col lg ={12}>
                            Address &nbsp;&nbsp;&nbsp;<input value={values.address} type="text" name="address" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('address')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            City &nbsp;&nbsp;&nbsp;<input value={values.city} type="text" name="city" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('city')}/>
                        </Col>
                        <Col>
                            State &nbsp;&nbsp;&nbsp;<input value={values.state} type="text" name="state" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('state')}/>
                        </Col>
                        <Col>
                            Country &nbsp;&nbsp;&nbsp;<input value={values.country} type="text" name="country" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('country')}/>
                        </Col><Col>
                            Zip Code &nbsp;&nbsp;&nbsp;<input value={values.zipCode} type="number" name="zipCode" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('zipCode')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> Do you require all the attending pets must be neutered? </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Row style={{justifyContent:"space-around", padding:"15px 20% 30px 20%"}}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="isNeuteredRadios"
                                value="Yes"
                                checked = {values.isNeutered === 'Yes'}
                                onChange={handleChange('isNeutered')}
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="isNeuteredRadios"
                                value="No"
                                checked = {values.isNeutered === 'No'}
                                onChange={handleChange('isNeutered')}
                                />
                            </Row>
                        </Form.Group>
                    </Row>
                </Container> 
                <Row style={{display:"flex", justifyContent:"space-around", padding:"0 20%"}}>
                  <Button variant="outline-secondary" className="create-event-button" size="lg" onClick={this.clear}>
                    Clear
                  </Button>
                  <Button variant="secondary" className="create-event-button"  size="lg" onClick={this.continue}>
                    Next
                  </Button>
                </Row>
            </Container>
        )
    }
}
GeneralInfo.propTypes = {
    handleChange: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};
