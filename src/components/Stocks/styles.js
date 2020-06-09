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
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #30333b;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888ea0;
  }

  .info {
    flex: 1;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    .sub {
      font-size: 13px;
    }
    .num {
      font-size: 15px;
      font-weight: bold;
    }
  }

  .row {
    display: flex;
  }

  .ticker {
    flex: 2;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    border-bottom: 2px solid #262931;
  }

  .name {
    flex: 2;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
    padding: 3px 3px 3px 5px;
    font-weight: normal;
  }
`;
