import { InputText } from "primereact/inputtext";
import styled from "styled-components";

const Input = styled(InputText)`
  &.p-inputtext,
  &.p-password-panel {
    color: #FFFFFF;
    background-color: #353b44;
    border-color: #262931;
    ::placeholder {
      color: #888EA0;
    }
  }

  &.p-inputtext:enabled:focus,
  &.p-password-panel:enabled:focus,
  &.p-inputtext:enabled:hover,
  &.p-password-panel:enabled:hover {
    box-shadow: none;
    border-color: #888EA0;
  }

  &.p-disabled {
    background-color: #888EA0;
  }
`;

export default Input;
