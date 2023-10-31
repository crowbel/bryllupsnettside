import { css } from 'styled-components';

export const phoneMedia = (styles: any) => css`
  @media ("max-width: 768px"){
    ${styles}
  }
`;