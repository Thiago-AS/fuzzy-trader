import styled from "styled-components";

const Container = styled.div`
  background-color: #262931;
  height: 100%;

  .login-body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login-holder {
    width: 30%;
    margin: 0px 0px 120px 0px;
  }

  .login-text {
    h1 {
      font-weight: bold;
      font-size: 1.76em;
      color: #ffffff;
      text-align: center;
    }

    padding-bottom: 36px;
  }

  .login-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h6 {
      flex: 30%;
      font-size: 0.9em;
      color: #6d6d6d;
      margin: 0;
    }
    .button-holder {
      flex: 40%;
    }
  }

  .line {
    border-top: 1px solid #30333b;
    margin: 20px 0px 20px 0px;
  }

  form {
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        margin: 0px;
      }
    }
  }
`;

export default Container;
