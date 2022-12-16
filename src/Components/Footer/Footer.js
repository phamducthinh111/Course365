import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap"

function Footer() {
    return (
        <Container>
            <Row className="py-4 align-items-center">
                <Col md={6} sm={12}>
                    <p className="text-center mb-0">© 2021 Ionic Course365. All Rights Reserved.</p>
                </Col>
                <Col md={6} sm={12}>
                    <Nav className="justify-content-end">
                        <NavItem>
                            <NavLink href="#">
                                Privacy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Terms
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Feedback
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Support
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>

        </Container>
    )
}

export default Footer