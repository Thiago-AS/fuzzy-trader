import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .fixed {
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 auto;
  }
`;

export default Container;