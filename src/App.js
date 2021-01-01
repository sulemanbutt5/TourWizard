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


function App() {
  return (
	  <Router>
	<div>
	<div id="head">
		<Nav/>
		<LoginForm/>
		<ForgotPassForm/>	
		<SignupForm/>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/agencysingletour" component={agencySingleTour}/>
			<Route path="/grouptours" component={groupTours}/>
			<Route path="/about" component={About}/>
			<Route path="/registeragency" component={AgencyRegister}/>
			<Route path="/settings" component={Settings}/>
			<Route path="/singleCustomTour" component={SingleCustomTour}/>
			<Route path="/single" component={Single}/>
			<Route path="/allCustomTours" component={AllCustomTours}/>
			<Route path="/allAgencyTours" component={AllAgencyTours}/>
			<Route path="/userCustomTour" component={UserCustomTour}/>
			<Route path="/agencyProfile" component={AgencyProfile}/>
			<Route path="/agencyNewEvent" component={AgencyNewEvent}/>
			<Route path="/agencyProfilePassword" component={AgencyProfilePassword}/>
			
			<Route component={Error} />

			
		</Switch>
		<Footer/>
	</div>

</div>
</Router>
    )
}

export default App
