import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function Icon({ name, size, color, style }) {
  return <Feather name={name} size={size} style={style} color={color} />;
}
