import React, { useEffect, useState } from "react";
import Container from "./styles";
import History from "../../components/History";
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
      const jwt = localStorage.get("jwt");
      const wallet = api.get("/wallet", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(wallet);
      setWallet(wallet);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          <div className="col">
            <History data={wallet} />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </>
      )}
    </Container>
  );
};

export default Wallet;
