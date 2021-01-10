import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser,FaUserAlt,FaEnvelope,FaLock} from 'react-icons/fa'

function SignupFormModal() {
    return (
        <div>
            <div className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
				  <div className="modal-header text-center">
					<h4 className="modal-title w-100 font-weight-bold">Register</h4>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>
				  <div className="modal-body mx-3">
					<div className="col text-center">
						<h5 >Register now its free !</h5>
					</div>
					<div className="md-form mb-4">
					<FaUserAlt size={20} style={{fill: '#4a4646'}}/>
					  <input type="text" id="orangeForm-name" className="form-control validate" placeholder="Name"/>
					</div>
					<div className="md-form mb-4">
					<FaUser size={20} style={{fill: '#4a4646'}}/>
					  <input type="text" id="orangeForm-name" className="form-control validate" placeholder="User Name"/>
					</div>
					<div className="md-form mb-4">
					<FaEnvelope size={20} style={{fill: '#4a4646'}}/>
					  <input type="email" id="orangeForm-email" className="form-control validate" placeholder="Email"/>
					</div>

					<div className="md-form mb-4">
					<FaLock size={20} style={{fill: '#4a4646'}}/>
					  <input type="password" id="orangeForm-pass" className="form-control validate" placeholder="Password"/>
					</div>
					
					<div className="md-form mb-4">
					<FaLock size={20} style={{fill: '#4a4646'}}/>
					  <input type="password" id="orangeForm-pass" className="form-control validate" placeholder="Confirm Password"/>
					</div>

				  </div>
				  <div className="modal-footer d-flex justify-content-start flex-wrap">
					{" "}{" "}{" "}{" "}
					<Link to='/'><button className="btn btn-success">Create Account</button></Link>
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
