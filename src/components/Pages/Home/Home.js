import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />
      <div className="container-fluid flex-grow-1 d-flex align-items-end justify-content-end p-3 mb-5 m-md-0">
        <Main />
      </div>
    </div>
  );
}
