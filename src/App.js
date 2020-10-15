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
			
		</Switch>
		<Footer/>
	</div>

</div>
</Router>
    )
}

export default App
