import React from "react";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />
      <div className="container-fluid">
        <Main />
      </div>
    </div>
  );
}
