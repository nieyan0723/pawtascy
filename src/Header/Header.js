import React, {Component} from 'react';
import "./Header.css"
import logo from '../images/Logo-icon.png';
import {Navbar, Nav, Image, DropdownButton, Dropdown} from 'react-bootstrap';
import {NavLink, Route, Switch, withRouter, Link} from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import EventsContainer from '../Events/EventsContainer';
import Signup from '../Signup/SignupContainer';
import Login from '../Login/LoginContainer';
import CreateEventContainer from '../CreateEvent/CreateEventContainer';
import UserComponent from '../Usertemplate/UserComponent.js';
import DashComponent from '../Usertemplate/DashComponent.js';
import PetProComponent from '../Usertemplate/PetProComponent.js';
import HumanProfile from '../Signup/HumanProfile/HumanComponent';
import PetProfileBasics from '../Signup/PetBasics/PetBasicsComponent';
import PetProfileBasicscont from '../Signup/PetBasics_cont/PetBasicscontComponent';
import PetProfileDetails from '../Signup/PetDetails/PetDetailsComponent';
import Confirmation from '../Signup/Confirmation/ConfirmationComponent';
import Auth from '../Auth/Auth';
import EventDetails from '../Events/EventDetails';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUserAuthenticated: Auth.isUserAuthenticated(),
            needUpdate:false,
        }

    }
    checkUpdate(props){
        if(props.state.needUpdate !== this.state.needUpdate){
            this.setState(this.state.needUpdate = !props.state.needUpdate);
        }
    }
    logOut = () => {
        Auth.deauthenticateUser();
        this.setState({
            isUserAuthenticated: Auth.isUserAuthenticated(),
        })
    }

    rederLoginInfo(){
        if(this.state.isUserAuthenticated){
            return(
                <DropdownButton id="dropdown-basic-button" title={Auth.getEmail()} className="login-dropdown">
                    <Dropdown.Item><Link to="/user">My Profile</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/dashboard">Edit Profile</Link></Dropdown.Item>
                    {/*<Dropdown.Item><Link to="/eventdetail">Event Detail Template</Link></Dropdown.Item>*/}
                    <Dropdown.Item onClick={this.logOut}>Log out</Dropdown.Item>
                </DropdownButton>)
        }
        return(
                <div style={{display:"flex", flex:"row", justifyContent:"center"}}>
                    <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </div>
        )
    }

    render() {
        return (
            <div>
            <Navbar bg="white" expand="lg" className="header">
                <Image src={logo} className="mr-auto logo-image"/>
                <Navbar.Brand href="/" className="company-name">Pawtascy</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto right-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {/* <NavLink className="nav-link" to="/feeds">Feeds</NavLink> */}
                        <NavLink className="nav-link" to="/events">Events</NavLink>
                        <NavLink className="nav-link" to="/create-event">+Create Events</NavLink>
                        {this.rederLoginInfo()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path='/' exact component={HomeContainer}/>
                <Route path='/events' component={EventsContainer}/>
                <Route path='/create-event' component={CreateEventContainer}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/humanprofile' component={HumanProfile}/>
                <Route path='/petbasics' component={PetProfileBasics}/>
                <Route path='/petbasicscont' component={PetProfileBasicscont}/> 
                <Route path='/petdetails' component={PetProfileDetails}/> 
                <Route path='/confirmation' component={Confirmation}/> 
                <Route path='/login' component={Login}/>
                <Route path='/user' component={UserComponent}/>
                <Route path='/dashboard' component={DashComponent}/>
                <Route path='/eventdetail/:id' component={EventDetails} />
                <Route path='/pet/:username' component={PetProComponent} />
            </Switch>
            </div>
        );
    }
}

export default withRouter(Header);
/*
import React, {Component} from 'react';
import "./Header.css"
import logo from '../images/Logo-icon.png';
import {Navbar, Nav, Button, Image, NavDropdown, Form, FormControl} from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" className="header">
                <Image src={logo} className="mr-auto logo-image"/>
                <Navbar.Brand href="/" className="company-name">Pawtascy</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto right-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#feeds">Feeds</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#create-event">+Create Events</Nav.Link>
                        <Nav.Link href="#signup">Sign up</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
*/