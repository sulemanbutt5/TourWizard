import React from 'react'
import {FaEnvelope} from 'react-icons/fa'

function ForgotPasswordFromModal() {
    return (
        <div>
            <div class="modal fade" id="modalForgotForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
			  aria-hidden="true">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  <div class="modal-header text-center">
					<h4 class="modal-title w-100 font-weight-bold">Password Recovery</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  </div>
				  <div class="modal-body mx-3">
					<div class="col text-center">
						<h5 >Recover your password</h5>
					</div>
				  	<br/>
					<div class="md-form mb-4">
					<FaEnvelope size={20} style={{fill: '#4a4646'}}/>
					  <input type="email" id="defaultForm-email" class="form-control validate" placeholder="Email"/>
					</div>

					
				  </div>
				  <div class="modal-footer d-flex justify-content-center flex-wrap">
					{" "}{" "}<button class="btn btn-info">Send Me Password</button>
					<br/>
				  </div>
				</div>
			  </div>
			</div>		
        </div>
    )
}

export default ForgotPasswordFromModal
