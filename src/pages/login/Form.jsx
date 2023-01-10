import Link from "next/link";
import axios from 'axios';
import Router from 'next/router';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSignedIn } from "../../features/agent/agentSlice";

const Form = () => {

  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const dispatch = useDispatch()
const handleSubmit = async (e) =>{
e.preventDefault()
try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/signin`, {
  email: email,
  password: password
  });
  if (res.data.success) {
  // Save the token to local storage
  localStorage.setItem('token', res.data.token);
  dispatch(addSignedIn())
  

  // Redirect the user to the protected route
  Router.push('/my-dashboard');
  } else {
  console.log(res.data.error);
  }
  }
   catch (error) {
  console.error(error);
  }}

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="heading text-center m-5">
        <h3>Login</h3>
     
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}

        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
      </button>
      {/* login button */}

      <div className="divide">
        <hr />
      </div>
      {/* devider */}

 
      {/* more signin options */}
    </form>
  );
};

export default Form;
