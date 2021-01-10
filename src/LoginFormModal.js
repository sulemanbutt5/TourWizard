import React from 'react'
import {FaEnvelope,FaLock} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function LoginFormModal() {
    return (
        <div>
            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  <div class="modal-header text-center">
					<h4 class="modal-title w-100 font-weight-bold">Welcome Back !</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>
				  <div class="modal-body mx-3">
					<div class="col text-center">
						<h5 >Login to your account</h5>
					</div>
				  
					<div class="md-form mb-4">
					  <FaEnvelope size={20} style={{fill: '#4a4646'}}/>
					  <input type="email" id="defaultForm-email" class="form-control validate" placeholder="Your email"/>
					</div>

					<div class="md-form mb-4">
					  <FaLock size={20} style={{fill: '#4a4646'}}/>
					  <input type="password" id="defaultForm-pass" class="form-control validate" placeholder="Your password"/>
					</div>

					<div class="md-form mb-4">
						<input type="checkbox" name="remember" value="remember" checked/> Remember Me
						{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
						{" "}{" "}{" "}{" "}{" "}
						<a class="nav-link" data-toggle="modal" data-target="#modalForgotForm" href={window.location.href}>Forgotten password?</a>
					</div>
					<div class="modal-main d-flex justify-content-center flex-wrap">
						<Link to='/userProfile'><button class="btn btn-success" >Sign In</button></Link>
				  	</div>	
				  </div>
				  <div class="modal-footer d-flex justify-content-center flex-wrap">
					<a data-toggle="modal" data-target="#modalRegisterForm" href={window.location.href}><button class="btn btn-default" >Cick Here for Sign Up</button></a>
				  </div>
				</div>
			  </div>
			</div>
        </div>
    )
}

export default LoginFormModal
