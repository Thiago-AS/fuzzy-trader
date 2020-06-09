import React from "react";
import { Container, Icon } from "./styles";
import Card from "../../styles/components/Card";
import moment from "moment";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const Header = ({ history }) => (
  <Container>
    <ul>
      {history.map(({ ticker, amount, date, operationType, price }, index) => (
        <Card className="small-card">
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
            <p className="info">R${amount * price}</p>
            <p className="info">{moment(date).format("DD MMM YYYY")}</p>
          </div>
        </Card>
      ))}
    </ul>
  </Container>
);

export default Header;
