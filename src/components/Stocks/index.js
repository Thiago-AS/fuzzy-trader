import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import Card from "../../styles/components/Card";

const Stocks = ({ wallet }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stockInfo, setStocksInfo] = useState({});

  useEffect(() => {
    getStocksInfo();
  }, []);

  const getStocksInfo = async () => {
    try {
      const stocksIds = Object.keys(wallet.stocks);
      const stocks = (
        await Promise.all(
          stocksIds.map((id) => api.get("/stock/value?id=" + id))
        )
      ).map(({ data }) => data);
      const stocksInfo = stocksIds.map((id) => {
        const stockInfo = stocks.find((x) => x._id === id);
        return { ...stockInfo, ...wallet.stocks[id] };
      });
      console.log("INFO", stocksInfo);
      setStocksInfo(stocksInfo);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <Container>
      {loading || error ? (
        <> </>
      ) : (
        stockInfo.map(
          ({ ticker, amount, averagePrice, value, name }, index) => {
            const currValue = amount * value.c;
            const investedValue = amount * averagePrice;
            const profit = (currValue / investedValue - 1) * 100;
            return (
              <Card className="small-card" key={index}>
                <div className="card-holder">
                  <div className="ticker">
                    <p>{ticker}</p>
                    <p className="name">{name}</p>
                  </div>
                  <div className="row">
                    <div className="info">
                      <p className="sub">Invested value</p>
                      <p className="num">US${investedValue.toFixed(2)}</p>
                    </div>
                    <div className="info">
                      <p className="sub">Current value</p>
                      <p className="num">US${currValue.toFixed(2)}</p>
                    </div>
                    <div className="info">
                      <p className="sub">Profit</p>
                      <p className="num">{profit.toFixed(2)}%</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="info">
                      <p className="sub">Amount</p>
                      <p className="num">{amount}</p>
                    </div>
                    <div className="info">
                      <p className="sub">Average price</p>
                      <p className="num">US${averagePrice.toFixed(2)}</p>
                    </div>
                    <div className="info">
                      <p className="sub">Last price</p>
                      <p className="num">US${value.c.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          }
        )
      )}
    </Container>
  );
};

export default Stocks;
