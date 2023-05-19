import React from 'react'
import './form.css'
const form = () => {
    return (
        <div>
            <form className='mx-auto my-5 reg_form'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address Proof</label>
                    <input type="file" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder='city' />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Maharashtra</option>
                            <option>Bihar</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="pincode">Pincode</label>
                        <input type="text" className="form-control" id="pincode" placeholder='pincode' />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-info">Sign in</button>
            </form>
            <div className='row my-5 mx-auto'>

                <div className='col-lg-6 py-5 px-5 bg-info'>first</div>
                <div className='col-lg-6 py-5 px-5 bg-warning'>Second</div>
            </div>
            <div className='row my-5 mx-auto'>
                <div className='col-lg-6 py-5 px-5 bg-warning '>first</div>
                <div className='col-lg-6 py-5 px-5 bg-info'>Second</div>

            </div>
        </div>
    )
}

export default form
