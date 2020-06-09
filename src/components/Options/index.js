import React from "react";
import { Container, Value, Arrow } from "./styles";
import Accordion from "../../styles/components/Accordion.js";
import { AccordionTab } from "primereact/accordion";
import Button from "../../styles/components/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Stocks = ({ stocks }) => {
  return (
    <Container>
      <Accordion>
        {stocks.map(
          (
            {
              value,
              finnhubIndustry,
              logo,
              name,
              ticker,
              weburl,
              marketCapitalization,
              shareOutstanding,
            },
            index
          ) => {
            const variation = (value.c / value.pc - 1) * 100;
            return (
              <AccordionTab header={`${ticker} - ${name}`} key={index}>
                <div className="row">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="url">
                    <p className="sub">URL</p>
                    <p className="num">{weburl}</p>
                  </div>
                  <Button label="Sell" />
                  <Button label="Buy" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="info">
                        <p className="sub">Previous</p>
                        <p className="num">$ {value.pc.toFixed(2)}</p>
                      </div>
                      <div className="info">
                        <p className="sub">Price</p>
                        <p className="num">$ {value.c.toFixed(2)}</p>
                      </div>
                      <div className="info">
                        <p className="sub">Variation</p>
                        <Value color={variation >= 0 ? "green" : "red"}>
                          {variation.toFixed(2)}%
                        </Value>
                      </div>
                    </div>
                    <div className="row">
                      <div className="info">
                        <p className="sub">Sector</p>
                        <p className="num">{finnhubIndustry}</p>
                      </div>
                      <div className="info">
                        <p className="sub">Market Capitalization</p>
                        <p className="num">
                          $ {marketCapitalization.toFixed(2)}
                        </p>
                      </div>
                      <div className="info">
                        <p className="sub">Share Outstanding</p>
                        <p className="num">{shareOutstanding.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <Arrow color={variation >= 0 ? "green" : "red"}>
                    {variation >= 0 ? (
                      <FaArrowUp size={32} />
                    ) : (
                      <FaArrowDown size={32} />
                    )}
                  </Arrow>
                </div>
              </AccordionTab>
            );
          }
        )}
      </Accordion>
    </Container>
  );
};

export default Stocks;
