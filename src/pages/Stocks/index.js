import React, { useEffect, useState } from "react";
import Container from "./styles";
import Options from "../../components/Options";
import api from "../../services/api";

const Stocks = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    try {
      const jwt = sessionStorage.getItem("jwt");
      const { data } = await api.get("/stock", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setStocks(data);
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
            <Options stocks={stocks} />
          </div>
          <div className="col"></div>
        </>
      )}
    </Container>
  );
};

export default Stocks;
