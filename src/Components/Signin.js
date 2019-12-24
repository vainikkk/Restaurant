import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Signin extends Component {
    state = {}
    render() {
        return (
            <div className="signup-container">
                <Form styel>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Sign in</Button>
                </Form>
            </div>
        );
    }
}

export default Signin;