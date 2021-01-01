import React from 'react'
import {Link} from 'react-router-dom'

function SignupFormModal() {
    return (
        <div>
            <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
				  <div class="modal-header text-center">
					<h4 class="modal-title w-100 font-weight-bold">Register</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>
				  <div class="modal-body mx-3">
					<div class="col text-center">
						<h5 >Register now its free !</h5>
					</div>
					<div class="md-form mb-4">
					  <i class="fas fa-user prefix grey-text"></i>
					  <input type="text" id="orangeForm-name" class="form-control validate" placeholder="Name"/>
					</div>
					<div class="md-form mb-4">
					  <i class="fas fa-user prefix grey-text"></i>
					  <input type="text" id="orangeForm-name" class="form-control validate" placeholder="User Name"/>
					</div>
					<div class="md-form mb-4">
					  <i class="fas fa-envelope prefix grey-text"></i>
					  <input type="email" id="orangeForm-email" class="form-control validate" placeholder="Email"/>
					</div>

					<div class="md-form mb-4">
					  <i class="fas fa-lock prefix grey-text"></i>
					  <input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Password"/>
					</div>
					
					<div class="md-form mb-4">
					  <i class="fas fa-lock prefix grey-text"></i>
					  <input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Confirm Password"/>
					</div>

				  </div>
				  <div class="modal-footer d-flex justify-content-start flex-wrap">
					{" "}{" "}{" "}{" "}
					<button class="btn btn-deep-orange">Create Account</button>
					{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
					{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
					{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
					{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
					{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
					{" "}{" "}{" "}
					<a id="oplf" data-toggle="modal" href={window.location.href} data-target="#modalLoginForm" >Already have account? Login</a>
					<span>|</span>
					<Link to="/registeragency">Register Agency</Link>
				  </div>
				</div>
			  </div>
			</div>
        </div>
    )
}

export default SignupFormModal
