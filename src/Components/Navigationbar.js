import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigationbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <LinkContainer to="/"><NavbarBrand>reactstrap</NavbarBrand></LinkContainer>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <LinkContainer to="/components">
                                <NavItem className="nav">
                                    <NavLink>Components</NavLink>
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem className="nav">
                                    <NavLink>Sign Up</NavLink>
                                </NavItem>
                            </LinkContainer>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}