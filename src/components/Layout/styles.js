import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .fixed {
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 auto;
    min-height: calc(100vh - 152px);
  }
`;

export default Container;