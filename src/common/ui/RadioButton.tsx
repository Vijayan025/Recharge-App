import React from 'react';
import {View} from 'react-native';
import {
  RadioButton as PaperRadioButton,
  RadioButtonProps,
} from 'react-native-paper';

interface CustomRadioButtonProps extends RadioButtonProps {
  value: string;
  selectedValue: any;
  disabled?: boolean;
  onValueChange: (value: string) => void;
}

const RadioButton = ({
  value,
  selectedValue,
  onValueChange,
  disabled,
  ...props
}: CustomRadioButtonProps) => {
  const handlePress = () => {
    onValueChange(value);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <PaperRadioButton.Android
        value={value}
        disabled={disabled}
        status={selectedValue === value ? 'checked' : 'unchecked'}
        onPress={handlePress}
        {...props}
      />
    </View>
  );
};

export default RadioButton;
