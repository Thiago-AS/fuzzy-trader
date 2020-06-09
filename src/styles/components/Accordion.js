import styled from "styled-components";
import { Accordion } from "primereact/accordion";

const CustomAccordion = styled(Accordion)`
  &.p-accordion {
    margin: 20px 0px 40px 0px;
  }

  &.p-accordion .p-accordion-header a {
    border-radius: 0px;
    background-color: ${(props) => (props.color ? props.color : "#30333b")};
    border-color: ${(props) => (props.color ? props.color : "#30333b")};
  }

  &.p-accordion .p-accordion-tab {
    margin: 5px 0px;
  }

  &.p-accordion .p-accordion-header a .p-accordion-toggle-icon {
    display: none;
  }

  &.p-accordion .p-accordion-content {
    padding: 14px 14px 14px 14px;
    background-color: #30333b;
    border-color: #30333b;
  }

  &.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover a,
  &.p-accordion .p-accordion-header:not(.p-disabled).p-highlight a,
  &.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover a {
    background-color: #154a82;
    border: 1px solid #154a82;
  }

  &.p-accordion .p-accordion-header:not(.p-disabled) a:focus {
    box-shadow: none;
    color: #ffffff;
  }

  &.p-accordion .p-accordion-header a > span {
    color: #ffffff;
  }
`;

export default CustomAccordion;
