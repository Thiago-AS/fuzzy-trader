import React, { useRef } from "react";
import Container from "./styles";
import Button from "../../styles/components/Button";
import { Menu } from "primereact/menu";
import { useHistory } from "react-router-dom";

const Header = () => {
  const menu = useRef(null);
  const history = useHistory();
  const items = [
    {
      label: "Sign Out",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        sessionStorage.clear();
        history.push("/");
      },
    },
  ];

  return (
    <Container>
      <div className="logo"> Fuzzy Trader </div>
      <Button label="Wallet" onClick={() => history.push("/wallet")} />
      <Button label="Market" onClick={() => history.push("/stocks")} />
      <Menu model={items} popup={true} ref={menu} />
      <Button
        className="profile"
        icon="pi pi-user"
        onClick={(event) => menu.current.toggle(event)}
      />
    </Container>
  );
};

export default Header;
