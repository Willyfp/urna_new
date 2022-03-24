import styled, { css } from 'styled-components/native';
import { TextProps } from './types';

export const TextStyled = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => fontSize || 14}px;
  color: ${({ color }) => color || 'black'};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
