import React, { useEffect, useState } from "react";
import Container from "./styles";
import Options from "../../components/Options";
import OpertaionDetails from "../../components/OpertaionDetails";
import api from "../../services/api";

const Stocks = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);
  const [operation, setOperation] = useState({ stock: {}, type: "" });
  const [showOperation, setShowOperation] = useState(false);

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
          <div className="col bigger">
            <Options
              stocks={stocks}
              setOperation={setOperation}
              setShowOperation={setShowOperation}
            />
          </div>
          <div className="col">
            <OpertaionDetails
              operation={operation}
              showOperation={showOperation}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default Stocks;
