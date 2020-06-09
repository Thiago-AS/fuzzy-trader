import styled from "styled-components";
import { Button } from "primereact/button";

const CustomButton = styled(Button)`
  &.p-button {
    font-weight: bold;

    width: 100%;
    background-color: #4a90d9;
    border-color: #4a90d9;
    text-transform: uppercase;
  }

  &.p-button:enabled:hover {
    background-color: #58b8d3;
    border-color: #58b8d3;
  }

  &.p-button:enabled:focus {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline: 0 !important;
    background-color: #58b8d3;
    border-color: #58b8d3;
  }
`;

export default CustomButton;
