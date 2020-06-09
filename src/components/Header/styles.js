import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #30333b;
  display: flex;
  flex-direction: row;

  .logo {
    flex: 5;
    font-weight: bold;
    font-size: 1.76em;
    color: #4a90d9;
    display: flex;
    justify-content: flex-start;
    margin: 0px 20px 0px 20px;
    align-items: center;
  }

  .p-button {
    flex: 1;
    font-size: 1em;
    color: #ffffff;
    margin: 12px 20px 12px 20px;
  }

  .profile {
    flex: 0;
    font-size: 1em;
    color: #4a90d9;
    background-color: #ffffff;
    width: 40;
    height: 40;
    margin: 12px 20px 12px 20px;
    border-radius: 60px;

    &.p-button {
      background-color: #ffffff;
      border-color: #ffffff;
    }

    &.p-button:enabled:hover {
      background-color: #4a90d9;
      border-color: #4a90d9;
      color: #ffffff;
    }

    &.p-button:enabled:focus {
      background-color: #4a90d9;
      border-color: #4a90d9;
      color: #ffffff;
    }
  }
`;

export default Container;
