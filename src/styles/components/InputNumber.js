import { InputNumber } from "primereact/inputnumber";
import styled from "styled-components";

const Input = styled(InputNumber)`
  .p-inputtext {
    color: #333333;
    background-color: #ffffff;
    border-color: #262931;
    border-radius: 0px;
    ::placeholder {
      color: #888ea0;
    }
  }

  .p-inputtext:enabled:focus,
  .p-inputtext:enabled:hover {
    box-shadow: none;
    border-color: #888ea0;
  }

  .p-disabled {
    background-color: #888ea0;
  }
`;

export default Input;
