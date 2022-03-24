import React, { PropsWithChildren } from 'react';
import Text from '../Text';
import { ButtonStyled } from './styles';
import { ButtonProps } from './types';

const Button = ({
  color,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyled color={color} {...rest}>
      <Text bold color={color === 'white' ? 'black' : 'white'}>
        {children}
      </Text>
    </ButtonStyled>
  );
};

export default Button;
