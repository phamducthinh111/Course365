import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Input,
  Button} from 'reactstrap';
import Logo from "../../assets/images/Ionic_logo.png"

export default class Example extends React.Component {
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
        <div className=''>
            <Navbar className='p-3' color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={Logo} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavbarBrand href="/">Home</NavbarBrand>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Browse courses
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Web Development
                                </DropdownItem>
                                <DropdownItem>
                                    Mobile App
                                </DropdownItem>
                                <DropdownItem>
                                    Desktop App
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About Us
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Vision & Mission
                                </DropdownItem>
                                <DropdownItem>
                                    Team
                                </DropdownItem>
                                <DropdownItem>
                                    Contact Us
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Input placeholder='Search courses' />
                    </NavItem>
                    <NavItem>
                        <Button outline color='primary'> Search</Button>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
  }
}