import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 30px 0px 30px;
  margin: 30px 0px 30px 0px;
  flex: 1 1 1px;
  max-height: calc(100vh - 120px);
  border-right: 1px solid #30333b;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .small-card {
    color: #ffffff;
    flex: 1;
    display: flex;
    margin: 10px 10px 10px 10px;

    .p-card-body {
      flex: 1;
      display: flex;
      .p-card-content {
        flex: 1;
        display: flex;
      }
    }
  }

  .card-holder {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #30333b;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888ea0;
  }

  .row {
    flex: 1;
    display: flex;
  }

  .sub {
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #262931;
    flex: 1;
  }

  .graph {
    flex: 3;
    display: flex;

    .p-chart {
      flex: 1;
      padding: 50px 0px 10px 0px;
    }
  }
`;

export const Value = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
