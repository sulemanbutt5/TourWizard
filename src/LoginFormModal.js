import React from 'react'


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
					  <i class="fas fa-envelope prefix grey-text"></i>
					  <input type="email" id="defaultForm-email" class="form-control validate" placeholder="Your email"/>
					</div>

					<div class="md-form mb-4">
					  <i class="fas fa-lock prefix grey-text"></i>
					  <input type="password" id="defaultForm-pass" class="form-control validate" placeholder="Your password"/>
					</div>

					<div class="md-form mb-4">
						<input type="checkbox" name="remember" value="remember" checked/> Remember Me
						{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
						{" "}{" "}{" "}{" "}{" "}
						<a class="nav-link" data-toggle="modal" data-target="#modalForgotForm" href={window.location.href}>Forgotten password?</a>
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
