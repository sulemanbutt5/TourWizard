import React from 'react'

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
				  
					<div class="md-form mb-4">
					  <i class="fas fa-envelope prefix grey-text"></i>
					  <input type="email" id="defaultForm-email" class="form-control validate" placeholder="Username"/>
					</div>

					
				  </div>
				  <div class="modal-footer d-flex justify-content-center flex-wrap">
					{" "}{" "}<button class="btn btn-default">Send Me Password</button>
					<br/>
				  </div>
				</div>
			  </div>
			</div>		
        </div>
    )
}

export default ForgotPasswordFromModal
