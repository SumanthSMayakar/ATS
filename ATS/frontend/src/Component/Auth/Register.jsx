import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import validation from "./validation";

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobile: "",
    address: "",
  });

  const navigate = useNavigate();

  const [isError, setError] = useState("");

  const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setError(validation(user));

    if (!/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(user.password)) {
      setError.password = "Enter the strong password";
      return toast.error("Enter the strong password");
    }
    if (user.confirmpassword !== user.password) {
      setError.confirmpassword = "password not matched";
      return toast.error("Please check the confirm password");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
      setError.email = "Invalid email address";
      return toast.error("Please enter the valid mail ID");
    }

    try {
      console.log("user=", user);
      await axios
        .post(`/api/v1/auth/register`, user)
        .then((res) => {
          toast.success(res.data.msg);
          navigate("/");
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (err) {
      toast.error(err.message);
    }
  };

  function onChange(value) {
    console.log("captcha value :", value);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div className="card shadow-lg">
            <div className="card-body mb-3">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="col-md-12 text-center">
                  <div className="form-group mt-2">
                    <h2 className="mt-2 text-dark">Sign-Up</h2>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    onChange={readValue}
                    value={user.firstname}
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    onChange={readValue}
                    value={user.lastname}
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={readValue} value={user.email} name="email" id="email" className="form-control" required/>
                  <div>{isError.email && <p style={{color:"red"}}>{isError.email}</p>}</div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="pass">Password</label>
                  <input type="password" onChange={readValue} value={user.password} name="password" id="password" className="form-control" required/>
                  <div>{isError.password && <p style={{color:"red"}}>{isError.password}</p>}</div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="comfirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    onChange={readValue}
                    value={user.confirmpassword}
                    name="confirmpassword"
                    id="confirmpassword"
                    className="form-control"
                    required
                  />
                  <div>{isError.confirmpassword && <p style={{color:"red"}}>{isError.confirmpassword}</p>}</div> 
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    onChange={readValue}
                    value={user.mobile}
                    name="mobile"
                    id="mobile"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="add">Address</label>
                  <br />
                  <textarea
                    name="address"
                    onChange={readValue}
                    value={user.address}
                    id="address"
                    cols="auto"
                    rows="2"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mt-2 d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group mt-2 text-center bi bi-outline-success ">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="btn btn-outline-success w-100"
                  >
                    Register
                  </button>
                </div>
                <div className="form-group mt-2 text-center">
                  <strong className="">
                    Already Registered?{" "}
                    <NavLink to={"/login"} className="">
                      Sign-In
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

export default Register;
