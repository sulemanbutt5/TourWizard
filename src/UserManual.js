import React from 'react'
import groupTours from './groupTours'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import agencySingleTour from './agencySingleTour'
import AgencyRegister from './AgencyRegister'
import Settings from './Settings'
import SignupForm from './SignupFormModal'
import LoginForm from './LoginFormModal'
import ForgotPassForm from './ForgotPasswordFromModal'
import SingleCustomTour from './SingleCustomTour'
import Single from './Single'
import Error from './Error'
import AllCustomTours from './AllCustomTours'
import AllAgencyTours from './AllAgencyTours'
import UserCustomTour from './UserCustomTour'
import AgencyProfile from './AgencyProfile'
import AgencyProfilePassword from './AgencyProfilePassword'
import AgencyNewEvent from './AgencyNewEvent'
import LoginFormModal from './LoginFormModal'
import ForgetPasswordFromModal from './ForgotPasswordFromModal'
import UserProfile from './UserProfile'
import {Link} from 'react-router-dom'
 

function UserManual() {
    const stylepadding={margin:5}
  return (
		<div>
			<div id="head" style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <h1 style={{background:'coral'}}>Prototype Manual</h1>
                    <h3>This Page Created only for the ease in D3.</h3>
                    <h3>You can directly click these links for pages checking to avoid confusions in Prototype checking.</h3>
					<Link to='/'><button style={stylepadding}>Home</button></Link>
                    <Link to='/userProfile'><button style={stylepadding}>User Profile</button></Link>
                    <Link to='/settings'><button style={stylepadding}>User Profile Edit</button></Link>
                    <Link to='/userCustomTour'><button style={stylepadding}>Tour Request from User</button></Link>
                    <Link to='/grouptours'><button style={stylepadding}>Group Tours</button></Link>
                    <Link to='/agencysingletour'><button style={stylepadding}>Book Now</button></Link>
                    <Link to='/single'><button style={stylepadding}>View Defaukt Package Details</button></Link>
                    <Link to='/agencyRegister'><button style={stylepadding}>Register Your Agency</button></Link>
                    <Link to='/agencyProfile'><button style={stylepadding}>Agency Profile</button></Link>
                    <Link to='/agencyProfilePassword'><button style={stylepadding}>Change Agency's Password</button></Link>
                    <Link to='/singleCustomTour'><button style={stylepadding}>Custom Tour Details</button></Link>
                    <Link to='/allCustomTours'><button style={stylepadding}>Agency's Personal Custom Tours</button></Link>
                    <Link to='/agencyNewEvent'><button style={stylepadding}>Create Custom Tour by Agency</button></Link>
                    <Link to='/about'><button style={stylepadding}>About Section</button></Link>
                    <Link to='/allAgencyTours'><button style={stylepadding}>All Agency Tours</button></Link>
					
			</div>
		</div>
    )
}

export default UserManual