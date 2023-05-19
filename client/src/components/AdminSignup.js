import React from "react";
import { Link } from "react-router-dom";
export default function AdminSignup() {
  return (
    <div className="container p-5">
      <h2>Admin Signup</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Username
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <Link to="/">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
