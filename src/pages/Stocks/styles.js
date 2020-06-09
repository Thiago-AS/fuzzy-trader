import styled from "styled-components";

const Container = styled.div`
  background-color: #262931;
  height: 100%;
  display: flex;
  flex-direction: row;

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .bigger {
    flex: 2;
  }
`;

export default Container;
