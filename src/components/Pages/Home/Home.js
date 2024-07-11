import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />
      <div className="container-fluid d-flex flex-grow-1 align-items-center align-items-md-end  pb-md-4">
        <div className="row w-100">
          <div className="col-md-6 d-none rounded d-md-block main-text">
            <h1>Grievance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              veritatis corporis vel debitis distinctio voluptatum quo
              reiciendis tempora ex officia illo laborum vitae soluta repellat,
              obcaecati consequuntur est facere odio.
            </p>
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
