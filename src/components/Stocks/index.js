import React from "react";
import { Container, Value } from "./styles";
import Card from "../../styles/components/Card";

const Stocks = ({ stocks }) => {
  return (
    <Container>
      {stocks.map(({ ticker, amount, averagePrice, value, name }, index) => {
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
                  <p className="num">$ {investedValue.toFixed(2)}</p>
                </div>
                <div className="info">
                  <p className="sub">Current value</p>
                  <p className="num">$ {currValue.toFixed(2)}</p>
                </div>
                <div className="info">
                  <p className="sub">Profit</p>
                  <Value color={profit >= 0 ? "green" : "red"}>
                    {profit.toFixed(2)}%
                  </Value>
                </div>
              </div>
              <div className="row">
                <div className="info">
                  <p className="sub">Amount</p>
                  <p className="num">{amount}</p>
                </div>
                <div className="info">
                  <p className="sub">Average price</p>
                  <p className="num">$ {averagePrice.toFixed(2)}</p>
                </div>
                <div className="info">
                  <p className="sub">Last price</p>
                  <p className="num">$ {value.c.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default Stocks;
