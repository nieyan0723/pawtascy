import React, {Component} from 'react';
import {Container, Row, Col, Form,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CreateEvent.css';
import Progress from '../images/progress-icon.png';

export default class CostAndOthers extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <Container fluid className="create-event-page">
                <Row>
                    <Col lg={3} className="top-tag"> General Information </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Cost and Others </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Review </Col>
                </Row>
                <Form>
                    <Container className="bottom-form">
                        <Form.Group controlId="attendeesNnumber">
                            <Form.Label>How many people (with pets) do you expect for the Event?</Form.Label>
                            <Form.Control as="select" className="attendees-format">
                            <option>No Limit</option>
                            <option>1-10</option>
                            <option>11-20</option>
                            <option>21-40</option>
                            <option>above 40</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="costPerPerson">
                            <Form.Label>How much the cost for each attendee?</Form.Label>
                            <Form.Control type="text" placeholder="No cost" className="cost-format" value={values.cost} onChange={handleChange('cost')}/>
                        </Form.Group>
                    </Container>
                    <Container className="bottom-form">
                        <Form.Group controlId="description">
                            <Form.Label>How do you describe your Event?</Form.Label>
                            <Form.Control as="textarea" rows="5" className="description-format"  value={values.description} onChange={handleChange('description')}/>
                        </Form.Group>
                        <Form.Group controlId="specialRequirements">
                            <Form.Label>Do you have any special requirements that all the attendees need to pay attention to?</Form.Label>
                            <Form.Control as="textarea" rows="5" className="requirements-format"  value={values.specialRequirements} onChange={handleChange('specialRequirements')}/>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Upload an image for your event</Form.Label>
                            <Form.Control type="file" onChange={(e) => console.log(e.target.files)} className="file-format" value={values.image}/>
                        </Form.Group>
                    </Container>
                    <Row style={{display:"flex", justifyContent:"space-around", padding:"0 20%"}}>
                        <Button variant="outline-secondary" className="create-event-button" size="lg" onClick={this.back}>
                            Back
                        </Button>
                        <Button variant="secondary" className="create-event-button"  size="lg" onClick={this.continue}>
                            Next
                        </Button>
                    </Row>
                </Form>
            </Container>
        )
    }
}
CostAndOthers.propTypes = {
    handleChange: PropTypes.func.isRequired,
  };