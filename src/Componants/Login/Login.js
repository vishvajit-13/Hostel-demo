import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='LogMain'>
            <div className='loginForm'>
                        <form className='myform' >
                            <div className="row form-group">
                                <div className='col-lg-4 col-md-4 col-sm-6'>
                                    <label for="userid">User Id</label>
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-6'>
                                    <input type="email" class="form-control" id="userid" placeholder="Enter User Id" />
                                </div>
                            </div>
                            <div className=" row form-group my-4">
                                <div className='col-lg-4 col-md-4 col-sm-6'>
                                    <label for="Password1">Password</label>
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-6'>
                                    <input type="password" class="form-control" id="Password1" placeholder="Password" />
                                </div>
                            </div>
                            <div className=''>
                                <button type="submit" className="btn btn-info">Submit</button>
                            </div>
                        </form>   
            </div>
        </div>
    )
}

export default Login