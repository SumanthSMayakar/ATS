import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Login = (props) => {
  const [user, setUser] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate()

  const readValue = (e)=>{
    const { name , value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      console.log('login=', user);
      await axios.post(`/api/v1/auth/login`, user)
      .then((res)=>{
        toast.success(res.data.msg)
        localStorage.setItem("accessToken", res.data.token)
        navigate(`/`);
        window.location.href ="/"
      }).catch((err)=> toast.error(err.response.data.msg))
    } catch (err) {
      toast.error(err.message)
    }
  }

  function onChange(value) {
    console.log('captcha value :', value);
  }

  return (
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-lg-4 offset-lg-4">
            <div className="card shadow-lg " id="card" >
              <div className="col-md-12 text-center mt-4 ">
                <h3 className="text-dark">Sign in</h3>
              </div>
              <div className="card-body">
                <form autoComplete="off" onSubmit={submitHandler}>
                  <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" value={user.email} onChange={readValue} required/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={user.password} onChange={readValue} required/>
                  </div>
                  <div className="form-group mt-2 d-flex justify-content-center">
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange}/>
                  </div>
                  <div className="form-group mt-2 text-center bi bi-outline-success ">
                    <button type="submit" name="submit" id="submit" className="btn btn-outline-warning w-100">
                      Login
                    </button>
                  </div>
                  <div className="form-group mt-2 text-center">
                    <strong className=""> Are you new user?
                      <NavLink to={"/register"} className="mx-2">
                         Go to Sign-up
                      </NavLink>
                    </strong>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
