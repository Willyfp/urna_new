import React, { PropsWithChildren } from 'react';
import { TextStyled } from './styles';
import { TextProps } from './types';

const Text = ({
  color,
  bold,
  children,
  ...rest
}: PropsWithChildren<TextProps>) => {
  return (
    <TextStyled color={color} bold={bold} {...rest}>
      {children}
    </TextStyled>
  );
};

export default Text;
