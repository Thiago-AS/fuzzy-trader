import { Card } from "primereact/card";
import styled from "styled-components";

const MyCard = styled(Card)`
  &.p-card {
    background-color: ${(props) => (props.color ? props.color : "#30333b")};
    box-shadow: none;
    border: solid 1px;
    border-color: #30333b;
  }
`;

export default MyCard;
