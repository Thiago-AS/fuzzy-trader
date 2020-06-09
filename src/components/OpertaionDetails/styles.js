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

  .input {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #262931;
    display: flex;

    .amount {
      flex: 1;
      display: flex;
      flex-direction: center;
      align-items: center;
      margin-right: 10px;
      font-weight: bold;
      font-size: 18px;
    }

    .p-button {
      width: 60px;
      flex: 0;
    }

    .input-holder {
      flex: 6;
      display: flex;
      justify-content: flex-start;
      margin-right: 10px;
    }
  }

  .small-card {
    color: #ffffff;
    flex: 1;
    display: flex;
    margin: 10px 10px 10px 10px;
  }

  .p-card-body {
    flex: 1;
    display: flex;
    .p-card-content {
      flex: 1;
      display: flex;
    }
  }

  .small-card .sub,
  .big-card .title {
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #262931;
    flex: 1;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
  }

  .big-card {
    color: #ffffff;
    flex: 2;
    display: flex;
    margin: 10px 10px 10px 10px;

    .title {
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    .p-card-content {
      flex-direction: column;
    }

    .info {
      flex: 1;
      margin-right: 10px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      margin-top: 10px;
      color: #ffffff;
    }

    .sub {
      font-size: 13px;
    }
    .num {
      font-size: 15px;
      font-weight: bold;
    }

    .logo {
      height: 60px;
      width: 60px;
      img {
        width: 100%;
      }
      margin-right: 10px;
    }

    .url {
      flex: 1;
      margin-right: 10px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-end;
      color: #ffffff;
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
`;

export const Value1 = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const Value2 = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
