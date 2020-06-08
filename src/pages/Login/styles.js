import styled from "styled-components";

const Container = styled.div`
  .login-header {
    height: 130px;
    width: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    border-bottom: solid black 1px;

    h2 {
      font-weight: bold;
      font-size: 1.2em;
      color: #79a12f;
      height: 30px;
      width: 240px;
      margin: 40px 0px 0px 0px;
      padding: 0px 12px;
      text-align: center;
    }

    img {
      height: 60px;
      width: 300px;
      padding: 0 12px;
    }
  }

  .login-body {
    height: calc(100vh - 130px);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .login-holder {
    margin-top: 32px;
  }

  .login-text {
    h1 {
      font-weight: bold;
      font-size: 1.76em;
      color: #79a12f;
    }

    padding-bottom: 36px;
  }

  form {
    h6 {
      font-size: 1em;
      color: #6d6d6d;
      font-style: italic;
      margin: 0;
      padding-top: 24px;
    }

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
