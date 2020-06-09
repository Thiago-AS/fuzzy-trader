import React, { useEffect, useState } from "react";
import Container from "./styles";
import History from "../../components/History";
import Stocks from "../../components/Stocks";
import api from "../../services/api";

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWallet();
  }, []);

  const getWallet = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const { data } = await api.get("/wallet", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setWallet(data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };
  return (
    <Container>
      {loading || error ? (
        <></>
      ) : (
        <>
          <div className="col">
            <History wallet={wallet} />
          </div>
          <div className="col">
            <Stocks wallet={wallet} />
          </div>
          <div className="col"></div>
        </>
      )}
    </Container>
  );
};

export default Wallet;
