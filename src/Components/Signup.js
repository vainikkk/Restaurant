import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Signup extends Component {
    state = {
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });

    }
    handleClick = () => {
        
    }
    render() {
        return (
            <div className="signup-container">
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress2">Address 2</Label>
                        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" onChange={this.handleChange} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input type="text" name="city" id="exampleCity" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input type="text" name="state" id="exampleState" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input type="text" name="zip" id="exampleZip" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button onClick={this.handleClick}>Sign up</Button>
                </Form>
            </div>
        );
    }
}

export default Signup;