import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />
      <div className="container-fluid d-flex">
        <div className="col-md-6 d-none d-md-block">Hello</div>
        <div className="col-md-6">
          <Main />
        </div>
      </div>
    </div>
  );
}
