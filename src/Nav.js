import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
	const linkstyle={fontSize:"18px",fontWeight:"bold",color:"white"}
	const signupstyle={fontSize:"18px",fontWeight:"bold",color:"green",backgroundColor:"white"}
    return (
        <nav class="navbar navbar-expand-lg transparent navbar-inverse sticky-top" style={{zIndex:"9",backgroundColor:"black"}}>
			  <Link class="navbar-brand" to="/" style={{fontsize:"36px",fontWeight:"bold",color:"white"}}>{" "}{" "} Tour Wizard</Link>
			  <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
				<span class="navbar-toggler-icon"><img src="images/menu.png" style={{width:"25px",height:"25px"}} alt=""/></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{}}>
				<ul class="navbar-nav ml-auto">
				  <li class="nav-item active">
					<Link class="nav-link" style={linkstyle} to="/">Home{" "}{" "} <span class="sr-only">(current)</span></Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link" style={linkstyle}  to="/grouptours">Group Tours {" "}{" "}</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link" style={linkstyle}  to="/userManual">Prototype Manual {" "}{" "}</Link>
				  </li>
				  <li class="nav-item">
					<Link class="nav-link" style={linkstyle} to="/about">About Us{" "}{" "}{" "}</Link>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" 
						data-toggle="modal" style={linkstyle} data-target="#modalLoginForm" href={window.location.href}>Login {" "}{" "}</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link rounded"  
					data-toggle="modal" style={signupstyle} data-target="#modalRegisterForm" href={window.location.href}>Sign Up</a>
				  </li>
				</ul>
			  </div>
			</nav>
    )
}

export default Nav
