import React, { useEffect, useState } from "react";
import Container from "./styles";
import History from "../../components/History";
import Stocks from "../../components/Stocks";
import Summary from "../../components/Summary";
import api from "../../services/api";
import Title from "../../styles/components/Title";

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stockInfo, setStocksInfo] = useState({});
  const [summaryData, setSummaryData] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getWallet();
  }, []);

  const getWallet = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const wallet = await api.get("/wallet", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setWallet(wallet.data);
      const stocks = await api.get("/wallet/stocks", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setStocksInfo(stocks.data);
      console.log(stocks.data);
      const equity = stocks.data.reduce(
        (acc, { value, amount }) => acc + value.c * amount,
        0
      );
      const cost = stocks.data.reduce(
        (acc, { averagePrice, amount }) => acc + averagePrice * amount,
        0
      );
      const value = equity - cost;
      const variation = (value / cost) * 100;
      setSummaryData({ equity, cost, value, variation });
      const labels = [];
      const datasets = [
        {
          data: [],
          backgroundColor: [],
        },
      ];
      stocks.data.forEach(({ ticker, amount, value }) => {
        labels.push(ticker);
        datasets[0].data.push(amount * value.c);
        datasets[0].backgroundColor.push(
          "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
        );
      });
      setChartData({ labels, datasets });
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
            <Title>History</Title>
            <History wallet={wallet} />
          </div>
          <div className="col">
            <Title>Stocks</Title>
            <Stocks stocks={stockInfo} />
          </div>
          <div className="col">
            <Title>Summary</Title>
            <Summary summaryData={summaryData} chartData={chartData} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Wallet;
