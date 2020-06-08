import styled from "styled-components";
import { Button } from "primereact/button";

const CustomButton = styled(Button)`
  &.p-button {
    font-weight: bold;

    width: 100%;
    background-color: ${props => (props.primary ? "#58B8D3" : "#cc3333")};
    border-color: ${props => (props.primary ? "#58B8D3" : "#cc3333")};
  }

  &.p-button:enabled:hover {
    background-color: ${props => (props.primary ? "#4A90D9" : "#a61919")};
    border-color: ${props => (props.primary ? "#4A90D9" : "#a61919")};
  }

  &.p-button:enabled:focus {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline: 0 !important;
    background-color: ${props => (props.primary ? "#4A90D9" : "#cc3333")};
    border-color: ${props => (props.primary ? "#4A90D9" : "#cc3333")};
  }
`;

export default CustomButton;
