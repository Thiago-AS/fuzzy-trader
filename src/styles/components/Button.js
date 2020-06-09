import styled from "styled-components";
import { Button } from "primereact/button";

const CustomButton = styled(Button)`
  &.p-button {
    font-weight: bold;

    width: 100%;
    background-color: ${(props) => (props.color ? props.color : "#154a82")};
    border-color: ${(props) => (props.color ? props.color : "#154a82")};
    text-transform: uppercase;
  }

  &.p-button:enabled:hover {
    background-color: ${(props) =>
      props.colorHover ? props.colorHover : "#4a90d9"};
    border-color: ${(props) =>
      props.colorHover ? props.colorHover : "#4a90d9"};
  }

  &.p-button:enabled:focus {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline: 0 !important;
    background-color: ${(props) =>
      props.colorHover ? props.colorHover : "#4a90d9"};
    border-color: ${(props) =>
      props.colorHover ? props.colorHover : "#4a90d9"};
  }
`;

export default CustomButton;
