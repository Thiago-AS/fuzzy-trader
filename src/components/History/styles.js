import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 30px 0px 30px;
  margin: 30px 0px 30px 0px;
  flex: 1 1 1px;
  max-height: calc(100vh - 120px);
  border-right: 1px solid #30333b;
  overflow: auto;

  .small-card {
    margin-top: 30px;
    color: #ffffff;
  }
  .card-holder {
    display: flex;
    flex-direction: row;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #30333b;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888ea0;
  }

  .info {
    margin-right: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  .ticker {
    flex: 2;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
