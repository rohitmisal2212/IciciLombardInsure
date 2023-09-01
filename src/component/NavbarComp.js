import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavbarComp = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigation">
                <Container >
                    <Navbar.Brand to="/">
                        <img src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/il-logo.png" alt="CodeMind logo" className="brand-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto ">
                            <NavDropdown title="Motor Insurance" className="motor-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent1">
                                    <Link to="/" className="motor-item nav-link">Motor Insurance</Link>
                                    <Link to="/carInsurance" className="motor-item nav-link">Car Insurance</Link>
                                    <Link to="#bike-insurance" className="motor-item nav-link">Bike Insurance</Link>
                                    <Link to="#motor-floatre" className="motor-item nav-link">Motor Floater</Link>
                                </div>
                            </NavDropdown>
                        </Nav >
                        <Nav className="me-auto "  >
                            <NavDropdown title="Health Insurance" className="health-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent2">
                                    <Link to="/healthInsurance" className="health-item nav-link" >Health Insurance</Link>
                                    <Link to="#action/3.2" className="health-item nav-link">Health AdvantEdge</Link>
                                    <Link to="#action/3.3" className="health-item nav-link">Health Booster</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">Personal Protect</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">Arogya Sanjeevani Policy, ICICI Lombard</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">Corona Kavach Policy, ICICI Lombard</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">Saral Suraksha Bima, ICICI Lombard</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">Golden Shield</Link>
                                    <Link to="#action/3.4" className="health-item nav-link">iShield</Link>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Travel Insurance" className="travel-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent3">
                                    <Link to="#action/3.1" className="travel-item nav-link">Travel Insurance</Link>
                                    <Link to="#action/3.2" className="travel-item nav-link">Single Trip </Link>
                                    <Link to="#action/3.3" className="travel-item nav-link">Gold Multi Trip</Link>
                                    <Link to="#action/3.4" className="travel-item nav-link">Student Travel</Link>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Buisness Insurance" className="business-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent4">
                                    <Link to="#action/3.1" className="business-item nav-link">Buisness Insurance</Link>
                                    <Link to="#action/3.2" className="business-item nav-link">Marine Transit </Link>
                                    <Link to="#action/3.3" className="business-item nav-link">Workmen's Compansation</Link>
                                    <Link to="#action/3.4" className="business-item nav-link">Group Health Insurance</Link>
                                    <Link to="#action/3.5" className="business-item nav-link">Fire Insurance - Sookshma </Link>
                                    <Link to="#action/3.6" className="business-item nav-link">Marine Open Insurance</Link>
                                    <Link to="#action/3.7" className="business-item nav-link">Fire Insurance - Griha for<br />Housing Societies</Link>
                                    <Link to="#action/3.8" className="business-item nav-link">Professional Indemnity Policy<br />for Medical Practitioners</Link>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Other Insurance" className="other-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent5">
                                    <Link to="#action/3.1" className="other-item nav-link" >Crop Insurance</Link>
                                    <Link to="#action/3.2" className="other-item nav-link">NRI Insurance</Link>
                                    <Link to="#action/3.3" className="other-item nav-link">Cyber Insurance</Link>
                                    <Link to="#action/3.4" className="other-item nav-link">ICICI Bharat Griha Raksha<br />Policy</Link>
                                    <Link to="#action/3.5" className="other-item nav-link">Complete Home Protect</Link>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Renewals" className="renewals-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent6">
                                    <Link to="#action/3.1" className="renewals-item nav-link" >All Policy Renewals</Link>
                                    <Link to="#action/3.2" className="renewals-item nav-link">Car Policy</Link>
                                    <Link to="#action/3.3" className="renewals-item nav-link">Bike Policy</Link>
                                    <Link to="#action/3.4" className="renewals-item nav-link">Health Policy</Link>
                                    <Link to="#action/3.5" className="renewals-item nav-link">Travel Policy</Link>
                                    <Link to="#action/3.6" className="renewals-item nav-link">Business Insurance</Link>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Claims" className="claims-dropdown" id="basic-nav-dropdown">
                                <div id="dropContent7">
                                    <ul className="claims-list-left">
                                        <Link to="#action/3.1" className="claims-item nav-link" >Health Claims</Link>
                                        <Link to="#action/3.2" className="claims-item nav-link">Motor Claims</Link>
                                        <Link to="#action/3.3" className="claims-item nav-link">Travel Claims</Link>
                                        <Link to="#action/3.4" className="claims-item nav-link">Home Claims</Link>
                                        <Link to="#action/3.5" className="claims-item nav-link">Cyber Insurance Claims</Link>
                                    </ul>
                                    <ul className="claims-list-right">
                                        <Link to="#action/3.1" className="claims-item nav-link">Ola Claims</Link>
                                        <Link to="#action/3.2" className="claims-item nav-link">Redbus Claims</Link>
                                        <Link to="#action/3.3" className="claims-item nav-link">Corporate Claims</Link>
                                        <Link to="#action/3.4" className="claims-item nav-link">Mobile Claims - M-Kash</Link>
                                    </ul>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto" >
                            <Nav.Link to="#login" className="login" id="basic-nav-dropdown">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}
export default NavbarComp
