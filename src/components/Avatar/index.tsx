import React from 'react';
import { ImageAvatar } from './styles';

const Avatar = ({ uri, size }: { uri: string; size?: number }) => {
  return <ImageAvatar source={{ uri }} size={size} />;
};

export default Avatar;
