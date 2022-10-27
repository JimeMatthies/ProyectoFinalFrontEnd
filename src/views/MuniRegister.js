import React from "react";
import "../styles/MuniRegister.css";

const MuniRegister = () => {
  document.body.style.backgroundColor = "#0e66a3";
  return (
    <div className="MuniRegisterBox d-flex justify-content-center align-items-center border-success">
      <div className="col-md-6 p-4 bg-light">
        <h2 className="text-center text-primary">Register</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Phone
            </label>
            <input
              type="email"
              placeholder="Phone"
              className="form-control"
              id="inputEmail4"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Position
            </label>
            <input
              type="email"
              placeholder="Position"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Municipality
            </label>
            <select className="form-select" aria-label="Default select example">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </select>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input
            className="p-1 mt-3 btn btn-primary col-2"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default MuniRegister;
