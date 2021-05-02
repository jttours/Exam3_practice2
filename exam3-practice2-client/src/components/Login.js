//import { useState } from 'react';
//import PropTypes from 'prop-types';
import '../login.css';



export default function Login(props) {
//const [tenantPhoneNumber,setTenantPhoneNumber]=useState();
let tenantPhoneNumber='';
    
const onPhoneInput = (e) => {
  e.preventDefault();
     tenantPhoneNumber = e.target.value;
     console.log(tenantPhoneNumber);
}

const validatePhoneNumber = () => {
  const qs = new URLSearchParams({
     phone: tenantPhoneNumber
  });
  fetch('http://localhost:4567/tenant/search?' + qs)
     .then(res => {
        if (res.ok) {
           return res.text();
        } else throw new Error(res.statusText)
     })
     .then(res => {
        alert(res)
        props.onValidatedPhone(res);
     })
     .catch(err => console.log(err))

}


  return(
    <div className="login-wrapper">
      <h1>Please enter your phone number to log your Ticket</h1>
      <form>
        <label>
          <p>Phone Number</p>
          <input onChange = {onPhoneInput}/>
        </label>
        {/* <label>
          <p>Password</p>
          <input type="password" />
        </label> */}
        <div>
          <button onClick={validatePhoneNumber}>Validate and Login</button>
        </div>
      </form>
    </div>
  )
}

