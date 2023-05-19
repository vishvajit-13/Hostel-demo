import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import image1 from '../Registration/register.avif'
import './Registration.css'
import { myDictionary } from '../Landing/dict'
import axios from 'axios';
const Registration = () => {

  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);


  const handleStateChange = (e) => {
    const selectedStateName = e.target.value;
    const selectedStateObj = myDictionary.states.find(state => state.state === selectedStateName);
    setSelectedState(selectedStateName);
    setDistricts(selectedStateObj.districts);
  };

  const postData = (data) => {
    data["state"]=selectedState
    console.log("vishvajit it is called", data);
    axios.post('192.168.1.109:4200/Registration',data)
      .then(responce => console.log(responce))
      .catch(error => console.error(error))
  };
  const { register, handleSubmit} = useForm();

  return (
    <div className='row main-div'>
      <div className='con-div col-lg-6'>
        <img className='img-fluid reg-img' src={image1} alt='ok'></img>
      </div>

      <div className='col-lg-6 form-div'>
        <form className='reg-form' onSubmit={handleSubmit(postData)}>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="Enter first name" {...register("f_name")}  />
            </div>
            <div class="form-group col-md-4">
              <label for="middleName">Middle Name</label>
              <input type="text" class="form-control" id="middleName" placeholder="Enter middle name" {...register("m_name")}  />
            </div>
            <div class="form-group col-md-4">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Enter last name" {...register("l_name")} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="departmentName">Department Name</label>
              <input type="text" class="form-control" id="departmentName" placeholder="Enter department name" {...register('department')} />
            </div>
            <div class="form-group col-md-5">
              <label for="class">class</label>
              <input type="text" class="form-control" id="class" placeholder="Enter class name" {...register("class")} />
            </div>
            <div class="form-group col-md-2">
              <label for="yearSelection">Year</label>
              <select id="yearSelection" class="form-control" {...register('year')}>
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter address" {...register("address")} />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="state-select">State</label><br />
              <select className='select_box' id="state-select" onChange={handleStateChange} value={selectedState}>
                <option value="">--Select--</option>
                {myDictionary.states.map(state => (
                  <option key={state.state} value={state.state}>{state.state}</option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="district-select">District</label><br />
              <select className='select_box' id="district-select" {...register("district")}>
                <option value="">--Select--</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="city">City</label>
              <input type="text" class="form-control" id="city" placeholder="Enter city" {...register("city")} />
            </div>
            <div class="form-group col-md-6">
              <label for="pincode">Pincode</label>
              <input type="text" class="form-control" id="pincode" placeholder="Enter pincode" {...register("pincode")}  />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="dateOfAdmission">Date of Admission</label>
              <input type="date" class="form-control" id="dateOfAdmission" {...register("admission_date")} />
            </div>
            <div class="form-group col-md-6">
              <label for="hostelSelection">Choose Hostel</label>
              <select id="hostelSelection" class="form-control" {...register("Hostel")}>
                <option selected>Choose...</option>
                <option>Hostel A</option>
                <option>Hostel B</option>
                <option>Hostel C</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email" placeholder="Enter email" {...register("email")} />
            </div>
            <div class="form-group col-md-6">
              <label for="Mobile">Mobile</label>
              <input type="text" class="form-control" id="mobile" placeholder="Enter mobile" {...register("mobile")} />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mx-5" >Register</button>
          <button type="reset" class="btn btn-info">Reset</button>
        </form>


      </div>
    </div >
  )
}

export default Registration