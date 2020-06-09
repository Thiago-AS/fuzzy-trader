import React, { useEffect, useState, useRef } from "react";
import Container from "./styles";
import Card from "../../styles/components/Card";
import Button from "../../styles/components/Button";
import api from "../../services/api";
import { Menu } from "primereact/menu";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [credit, setCredit] = useState("----");
  const menu = useRef(null);
  const history = useHistory();
  const items = [
    {
      label: "Sign Out",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        localStorage.removeItem("jwt");
        history.push("/");
      },
    },
  ];

  useEffect(() => {
    getUserCredit();
  });

  const getUserCredit = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const { data } = await api.get("/wallet/credit", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setCredit(data.credit);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="logo"> Fuzzy Trader </div>
      <Button label="Wallet" />
      <Button label="Stocks" />
      <Card color="#262931">
        <div className="row">
          <p>Credit: </p>
          <p className="num">{credit}</p>
          <Button icon="pi pi-plus" />
        </div>
      </Card>
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
