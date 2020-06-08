import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;

