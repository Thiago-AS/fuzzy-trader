import React from "react";
import Container from "./styles";
// import Header from "../Header";
// import Footer from "../Footer";

const Layout = ({ children }) => (
  <Container>
    <div className="fixed">
      {/* <Header /> */}
    </div>
    <div className="content">{children}</div>
    <div className="fixed">
      {/* <Footer /> */}
    </div>
  </Container>
);
export default Layout;