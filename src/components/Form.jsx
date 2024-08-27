import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5 px-0 ">
        <div
          className="col-lg-10 col-xxl-7 co-md-8 d-flex px-0"
          style={{ boxShadow: "5px 5px 5px 5px", borderRadius: "15px" }}
        >
          <div
            className="col-lg-6 col-md-6 p-5"
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
            <div className='col-md float-start mt-4'>
              <button className='btn btn-light px-5 fw-bold' type='button'>Have An Account</button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 p-5 text-start "
            style={{
              backgroundColor: "whitesmoke",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <form action="">
              <div className="col mt-3">
                <h1 className="text-primary">Register</h1>
              </div>
              <div className="col d-flex mt-3">
                <div className="col me-3">
                  <label htmlFor="">Full Name </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label htmlFor="">Phone Number</label>
                  <input className="form-control" type="tel" />
                </div>
              </div>
              <div className="col-md mt-3">
                <label className="form-label" htmlFor="">
                  Your Email
                </label>
                <input className="form-control" type="email" />
              </div>
              <div className="col-md mt-3 d-flex">
                <div className="col-md me-3">
                  <label htmlFor="">Password</label>
                  <input className="form-control" type="password" />
                </div>
                <div className="col-md">
                  <label htmlFor="">Confirm Password</label>
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="col-md mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="">
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
                  <button className="btn btn-danger px-4" type="reset">
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
