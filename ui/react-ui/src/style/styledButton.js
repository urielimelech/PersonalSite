import styled from "styled-components";
import { appColors } from "../consts/colors";

export const StyledButton = styled.button`
  color: ${(props) =>
    props?.color ? props?.color : props?.isPrimary ? appColors.primaryText : appColors.secondaryText};
  background-color: ${(props) =>
    props?.backgroundColor
      ? props.backgroundColor
      : props.isPrimary
      ? appColors.primaryBackground
      : appColors.secondaryBackground};
  border: 1px solid ${(props) => (props?.isPrimary ? appColors.primaryBorder : appColors.secondaryBorder)};
  border-radius: 10px;
  margin: ${(props) => (props?.margin ? props.margin : "5px")};
  padding: ${(props) => (props?.padding ? `${props.padding * 0.33}em ${props.padding}em` : "0.5em 1.5em")};
  cursor: ${(props) => (props?.isLoading ? "wait" : props?.isDisabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-out;
  &:hover,
  &:active {
    opacity: 0.7;
    border-width: 2px;
  }
`;
