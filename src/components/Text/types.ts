import { TextProps as TextNativeProps } from 'react-native';

export type TextProps = TextNativeProps & {
  color?: string;
  bold?: boolean;
  fontSize?: number;
  margin?: string;
};
