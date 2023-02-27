import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 524px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;
};

export const Desktop = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  `;
};
