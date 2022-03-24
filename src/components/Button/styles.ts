import styled from 'styled-components/native';
import { ButtonProps } from './types';

export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  height: ${({ color }) => (color !== 'lightgray' ? 55 : 45)}px;
  width: 120px;
  margin-horizontal: 5px;
  margin-vertical: 5px;
  justify-content: center;
  align-items: center;
`;
