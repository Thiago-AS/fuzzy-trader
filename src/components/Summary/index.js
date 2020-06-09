import React from "react";
import { Container, Value } from "./styles";
import Card from "../../styles/components/Card";
import { Chart } from "primereact/chart";

const Summary = ({ summaryData, chartData }) => {
  return (
    <Container>
      <div className="graph">
        <Chart type="pie" data={chartData} />
      </div>
      <div className="row">
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Equity</p>
            </div>
            <Value>$ {summaryData.equity.toFixed(2)}</Value>
          </div>
        </Card>
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Cost</p>
            </div>
            <Value>$ {summaryData.cost.toFixed(2)}</Value>
          </div>
        </Card>
      </div>
      <div className="row">
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Variation</p>
            </div>
            <Value color={summaryData.value >= 0 ? "green" : "red"}>
              $ {summaryData.value.toFixed(2)}
            </Value>
          </div>
        </Card>
        <Card className="small-card">
          <div className="card-holder">
            <div className="sub">
              <p>Variation</p>
            </div>
            <Value color={summaryData.variation >= 0 ? "green" : "red"}>
              {summaryData.variation.toFixed(2)}%
            </Value>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Summary;
