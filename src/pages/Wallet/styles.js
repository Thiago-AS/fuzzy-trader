import styled from "styled-components";

const Container = styled.div`
  background-color: #262931;
  height: 100%;
  display: flex;
  flex-direction: row;

  .col {
    flex: 1;
    display: flex;
  }

  .itens-card {
    flex: 1;
    margin: 30px 10px 30px 30px;
  }
`;

export default Container;
