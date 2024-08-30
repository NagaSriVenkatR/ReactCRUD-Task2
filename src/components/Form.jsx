import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css"
import { useNavigate } from 'react-router-dom';
const Form = ({users,setUsers}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
  }
  const handleBlur = (event) => {
    const { name, value } = event.target;
    let validateErrors = { ...errors };
    if (!value) {
      validateErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required `;
    } else {
      validateErrors[name] = "";
    }
    setErrors(validateErrors);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  let emailPattern =
    /^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-zA-Z]+).([a-zA-Z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPattern = /[0-9]/;
  let specialCharacterPattern = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  let phonenumberPattern = /^([0-9]{10})$/
  const validateForm = () => {
    let valid = true;
    let newErrors = [];
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    } else {
      newErrors.fullName = " ";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Mobile Number is required";
      valid = false;
    } else {
      if(!phonenumberPattern.test(formData.phoneNumber)){
        newErrors.phoneNumber = "Mobile number should be 10 digits";
        valid = false;
      }else{
        newErrors.phoneNumber = " ";
      }
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Enter valid email";
        valid = false;
      } else {
        newErrors.email = " ";
      }
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      if (!minlengthCharacterPattern.test(formData.password)) {
        newErrors.password = "password must be between 8 to 16 characters";
        valid = false;
      } else if (!lowerCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 lowercase character";
        valid = false;
      } else if (!numberPattern.test(formData.password)) {
        newErrors.password = "At least 1 number";
        valid = false;
      } else if (!specialCharacterPattern.test(formData.password)) {
        newErrors.password = "At least 1 special character";
        valid = false;
      } else if (!upperCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 uppercase character";
        valid = false;
      } else {
        newErrors.password = " ";
      }
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        "Check your confirm password and password should be same";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      setUsers([...users,formData]);
      navigate('/users');
    }
  };
  return (
    <div className="container">
      <div className="parent row justify-content-center align-items-center mt-lg-5 mt-md-3  px-0 mx-auto">
        <div
          className="child col-lg-12 col-xxl-9 col-md-12 px-0 d-sm-flex"
          style={{ boxShadow: "5px 5px 5px 5px", borderRadius: "15px" }}
        >
          <div
            className="info col-lg-6 col-md-4 p-5"
            style={{
              backgroundColor: "#3786BD",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          >
            <div className="col-md text-start text-white" style={{}}>
              <h3>INFORMATION</h3>
              <p className="mt-3" style={{ fontSize: "13px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                molestie ac feugiat sed. Diam volutpat commodo.
              </p>
              <p style={{ fontSize: "13px" }}>
                <strong>Eu ultrices:</strong> Vitae auctor eu augue ut.
                Malesuada nunc vel risus commodo viverra. Praesent elementum
                facilisis leo vel.
              </p>
            </div>
            <div className="col-md float-start mt-md-4 mt-sm-3">
              <button
                className="btn btn-light px-md-5 px-sm-3 fw-bold"
                type="button"
              >
                Have An Account
              </button>
            </div>
          </div>
          <div
            className="form-div col-lg-6 col-md-6 p-5 text-start "
            style={{
              backgroundColor: "whitesmoke",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <form action="" onSubmit={handleSubmit}>
              <div className="col mt-3">
                <h1 className="text-primary">Register</h1>
              </div>
              <div className="col d-md-flex mt-3">
                <div className="col me-md-3">
                  <label className="name" htmlFor="">
                    Full Name{" "}
                  </label>
                  <input
                    className="form-control"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{errors.fullName}</span>
                </div>
                <div className="col phone">
                  <label htmlFor="">Phone Number</label>
                  <input
                    className="form-control"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{errors.phoneNumber}</span>
                </div>
              </div>
              <div className="col-md mt-3">
                <label className="form-label" htmlFor="">
                  Your Email
                </label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="col-md mt-3 d-md-flex">
                <div className="col-md me-3">
                  <label htmlFor="">Password</label>
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{errors.password}</span>
                </div>
                <div className="col-md conpass">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    className="form-control"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{errors.confirmPassword}</span>
                </div>
              </div>
              <div className="col-md mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label agree" htmlFor="">
                  I agree to the <a href="./">Terms and Conditions</a>
                </label>
              </div>
              <div className="col-md justify-content-end d-flex mt-3 pb-3">
                <div>
                  <button className="btn btn-primary px-4 me-3" type="submit">
                    Register
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger px-4" type="reset" onReset={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
