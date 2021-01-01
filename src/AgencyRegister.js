import React,{useEffect} from 'react'

function AgencyRegister() {
    useEffect(()=>{
        document.title="Tour Wizard | Register Agency"
    },[])
    return (
<div>
	
{/* <!------------------------------------Body---------------------------------------------------------------> */}
    <br/><br/>

    <div class="container">
        
        <div class="row">
            <div class="col-md-6">
                <img src="images/businessman.png" class="img-fluid" alt="Responsive"/>
            </div>
            <div class="col-md-6 primary_font">							 
                <div align="center">
                    <span class="primary_color">Running an Agency?</span> Register it <strong>NOW!</strong>
                </div><br/>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Agency Titlte</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title here"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Email</label>
                        <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Email here"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Password</label>
                        <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password here"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Address here"/>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" align="center">
                            <button type="submit" class="btn btn-success">Register</button>
                        </div>
                    </div>
                </form>								
            </div>
        </div>									
    </div>
    
    <br/><br/><br/><br/>

</div>
    )
}

export default AgencyRegister
