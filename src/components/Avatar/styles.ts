import styled from 'styled-components/native';

type ImageProps = {
  size?: number;
};

export const ImageAvatar = styled.Image<ImageProps>`
  height: ${({ size }) => size || 80}px;
  width: ${({ size }) => size || 80}px;
  border-radius: ${({ size }) => (size ? size / 2 : 40)}px;
`;
