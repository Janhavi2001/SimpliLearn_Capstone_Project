import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitUser(e) {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/v1/user/signin").then((result)=>{
      console.warn("result",result)
      if (result === false) {
        console.log("Invalid credentials");
      } else {
        console.log("Logged in");
      }
  });
   
  }
  return (
    <div className="container ">
      <div className="  row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">User Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mx-1"
                    onClick={submitUser}
                  >
                    Submit
                  </button>

                  <Link className="navbar-brand" to="/signupuser">
                    <button type="submit" className="btn btn-primary mx-1">
                      Signup
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Admin Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    UserName
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary mx-1">
                    Submit
                  </button>
                  <Link to="/signupadmin">
                    <button type="submit" className="btn btn-primary mx-1">
                      Signup
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
