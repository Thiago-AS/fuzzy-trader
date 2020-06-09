import React from "react";
import Container from "./styles";

const props = {
  tabs: [
    { path: "/contracts", label: "Contrato" },
    { path: "/bonds", label: "Vinculo" }
  ]
};

const Header = () => (
  <Container fluid>
      {props.tabs.map(tab => (
          <> </>
      ))}
  </Container>
);

export default Header;