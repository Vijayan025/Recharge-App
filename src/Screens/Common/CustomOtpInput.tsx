import React, {useEffect, useRef} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, View} from 'react-native';
import config from '../../common/config';
import {theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {InputBoxStyle} from '../../styles/Input';

interface CustomOtpInputViewProps {
  setCode: any;
  code?: string;
  pinCount?: number;
  primary?: boolean;
  autoFocusOnLoad?: boolean;
  secureTextEntry?: boolean;
  codeInputFieldStyle?: object;
  codeInputHighlightStyle?: object;
  otpInputRef?: React.RefObject<OTPInputView>;
}

export const CustomOtpInputView = ({
  setCode,
  code = '',
  pinCount = config.otpCount,
  primary = false,
  autoFocusOnLoad = true,
  secureTextEntry,
  codeInputFieldStyle,
  codeInputHighlightStyle,
  otpInputRef,
  ...props
}: CustomOtpInputViewProps) => {
  return (
    <View style={[styles.otpView]}>
      <OTPInputView
        ref={otpInputRef}
        style={styles.otpInputView}
        pinCount={pinCount}
        placeholderCharacter="x"
        placeholderTextColor={theme.colors.slateGray}
        codeInputFieldStyle={{
          ...InputBoxStyle.otpBase,
          ...InputBoxStyle.otpInputPrimary,
          ...codeInputFieldStyle,
        }}
        codeInputHighlightStyle={{
          ...InputBoxStyle.otpInputHighlighted,
          ...(primary
            ? InputBoxStyle.otpInputPrimary
            : InputBoxStyle.otpInputAccent),
          ...codeInputHighlightStyle,
        }}
        onCodeChanged={setCode}
        onCodeFilled={setCode}
        code={code ? code : ''}
        autoFocusOnLoad={autoFocusOnLoad}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpView: {height: 60, ...Paddings.paddingHorizontalMedium},
  otpInputView: {...Paddings.paddingHorizontalSmall, maxWidth: 240},
});
