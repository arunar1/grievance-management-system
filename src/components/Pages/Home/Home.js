import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />
      <div className="container-fluid d-flex flex-grow-1 align-items-center align-items-md-end pb-md-4">
        <div className="row w-100 ps-md-2">
          <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center rounded-pill main-text text-center text-white">
            <h1>Grievance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              veritatis corporis vel debitis distinctio voluptatum quo
              reiciendis tempora ex officia illo laborum vitae soluta repellat,
              obcaecati consequuntur est facere odio.
            </p>
            <Link to='/signup'>
              <button className="btn btn-success">Register</button>
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="pe-md-4">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
