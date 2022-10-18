import React from 'react';
import {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from '@expo/vector-icons';

export default function Icon({
  IconLiberary = Feather,
  name,
  size,
  color,
  style,
}) {
  return <IconLiberary name={name} size={size} style={style} color={color} />;
}
