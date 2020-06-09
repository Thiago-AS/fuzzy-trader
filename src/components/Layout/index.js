import React from "react";
import Container from "./styles";
import Header from "../Header";

const Layout = ({ children }) => (
  <Container>
    <div className="fixed">
      <Header />
    </div>
    <div className="content">{children}</div>
  </Container>
);
export default Layout;
