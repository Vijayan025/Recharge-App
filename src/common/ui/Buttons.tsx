import React from 'react';
import {Button as PaperButton, IconButton} from 'react-native-paper';

interface Props {
  onPress: () => void;
  icon: string;
  label: string;
}

const Button: React.FC<Props> = ({onPress, icon, label}) => (
  <PaperButton
    // eslint-disable-next-line react/no-unstable-nested-components
    icon={({size, color}) => (
      <IconButton name={icon} size={size} color={color} />
    )}
    onPress={onPress}>
    {label}
  </PaperButton>
);

export default Button;
