import styled, { css } from "styled-components";

// ------------------------THEMES---------------------
// Use colorhexa to find new color schemes
// THEME: Kindo (Default)
const kindo0 = css`
  background-color: #f0e7df;
`;
const kindo1 = css`
  background-color: #5abf84;
`;
const kindo2 = css`
  background-color: #ffb473;
`;

// THEME: Cyber
const cyber0 = css`
  background-color: #313639;
`;
const cyber1 = css`
  background-color: #00f0ff;
`;
const cyber2 = css`
  background-color: #fcee09;
`;
// ---------------------------------------------------

const getTileStyles = props => {
  if (props.theme === "cyber") {
    if (props.owner === 1) return cyber1;
    else if (props.owner === 2) return cyber2;
    else return cyber0;
  } else {
    if (props.owner === 1) return kindo1;
    else if (props.owner === 2) return kindo2;
    else return kindo0;
  }
};

export const TileContainer = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 5px;
  color: #fafafa;
  border: none;
  &:focus {
    outline: none;
  }
  ${getTileStyles}
`;
