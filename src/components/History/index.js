import React from "react";
import { Container, Icon } from "./styles";
import Card from "../../styles/components/Card";
import moment from "moment";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const History = ({ wallet }) => {
  return (
    <Container>
      <ul>
        {wallet.history.map(
          ({ ticker, amount, date, operationType, price, name }, index) => (
            <Card className="small-card" key={index}>
              <div className="card-holder">
                <Icon color={operationType === "buy" ? "green" : "red"}>
                  {operationType === "buy" ? (
                    <FaArrowAltCircleUp size={32} />
                  ) : (
                    <FaArrowAltCircleDown size={32} />
                  )}
                </Icon>
                <div className="ticker">
                  <p>{ticker}</p>
                </div>
                <p className="name">{name}</p>
                <p className="info">US${(amount * price).toFixed(2)}</p>
                <p className="info">{moment(date).format("DD MMM YYYY")}</p>
              </div>
            </Card>
          )
        )}
      </ul>
    </Container>
  );
};

export default History;
