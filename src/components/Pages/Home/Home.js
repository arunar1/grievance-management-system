import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container-fluid d-flex flex-grow-1 justify-content-center align-items-center home-screen">
        <Main />
      </div>
    </div>
  );
}
