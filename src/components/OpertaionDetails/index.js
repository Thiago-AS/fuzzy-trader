import React, { useState, useEffect } from "react";
import { Container, Value1, Value2 } from "./styles";
import Card from "../../styles/components/Card";
import InputNumber from "../../styles/components/InputNumber";
import moment from "moment-timezone";
import Button from "../../styles/components/Button";
import api from "../../services/api";

const OpertaionDetails = ({ showOperation, operation }) => {
  const [times, setTimes] = useState({
    now: moment(Date.now()).tz("America/New_York"),
    open: moment("09:30am", "h:mma").tz("America/New_York"),
    close: moment("04:00pm", "h:mma").tz("America/New_York"),
    status: "Closed",
  });
  const [amount, setAmount] = useState(0);

  const submitOperation = async () => {
    try {
      const jwt = sessionStorage.getItem("jwt");
      const body = {
        stockId: operation.stock._id,
        amount,
        price: operation.stock.value.c,
        operationType: operation.type.toLowerCase(),
      };
      const response = await api.post("/wallet/operation", body, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(response);
      alert("Operation done successfully");
    } catch (err) {
      console.log(err);
      alert("Could not perform the operation");
    }
  };

  useEffect(() => {
    setTimes((t) => ({
      ...t,
      status:
        t.now.isBefore(t.close) && t.now.isAfter(t.open) ? "Open" : "Closed",
    }));
  }, []);

  return (
    <Container>
      {showOperation ? (
        <Card className="big-card">
          <div className="row">
            <div className="title">
              <p>
                {operation.type === "Buy"
                  ? "Buying operation"
                  : "Selling operation"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="logo">
              <img src={operation.stock.logo} alt="logo" />
            </div>
            <div className="url">
              <p className="sub">URL</p>
              <p className="num">{operation.stock.weburl}</p>
            </div>
          </div>
          <div className="row">
            <div className="info">
              <p className="sub">Previous</p>
              <p className="num">$ {operation.stock.value.pc.toFixed(2)}</p>
            </div>
            <div className="info">
              <p className="sub">Price</p>
              <p className="num">$ {operation.stock.value.c.toFixed(2)}</p>
            </div>
            <div className="info">
              <p className="sub">Variation</p>
              <Value2 color={operation.stock.variation >= 0 ? "green" : "red"}>
                {operation.stock.variation.toFixed(2)}%
              </Value2>
            </div>
          </div>
          <div className="row">
            <div className="info">
              <p className="sub">Sector</p>
              <p className="num">{operation.stock.finnhubIndustry}</p>
            </div>
            <div className="info">
              <p className="sub">Market Capitalization</p>
              <p className="num">
                $ {operation.stock.marketCapitalization.toFixed(2)}
              </p>
            </div>
            <div className="info">
              <p className="sub">Share Outstanding</p>
              <p className="num">
                {operation.stock.shareOutstanding.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="info">
              <p className="sub">Country</p>
              <p className="num">{operation.stock.country}</p>
            </div>
            <div className="info">
              <p className="sub">Currency</p>
              <p className="num">{operation.stock.currency}</p>
            </div>
            <div className="info">
              <p className="sub">IPO</p>
              <p className="num">
                {moment(operation.stock.ipo).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="info">
              <p className="sub">Ticker</p>
              <p className="num">{operation.stock.ticker}</p>
            </div>
            <div className="info">
              <p className="sub">Name</p>
              <p className="num">{operation.stock.name}</p>
            </div>
            <div className="info">
              <p className="sub">Phone</p>
              <p className="num">{operation.stock.phone}</p>
            </div>
          </div>
          <div className="row input">
            <p className="amount">Amount: </p>
            <div className="input-holder">
              <InputNumber
                value={amount}
                onChange={(e) => setAmount(e.value)}
                mode="decimal"
              />
            </div>
            <Button label={operation.type} onClick={() => submitOperation()} />
          </div>
        </Card>
      ) : (
        <div className="big-card"> </div>
      )}
      <div className="col">
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Market</p>
            </div>
            <Value1>NYSE/NASDAQ</Value1>
          </div>
        </Card>
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Status</p>
            </div>
            <Value1 color={times.status === "Open" ? "green" : "red"}>
              {times.status}
            </Value1>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default OpertaionDetails;
