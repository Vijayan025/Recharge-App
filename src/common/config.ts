
const config = {
  timeStampFormat: 'YYYY-MM-DDTHH:mm:ss.SSS',
  otpCount: 4,
  otpDuration: 45,
  mPinCount: 4,
  emailRegex:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z]([a-zA-Z0-9\-]*[a-zA-Z])?(\.[a-zA-Z]([a-zA-Z0-9\-]*[a-zA-Z])?)+$/i,
  PanRegex: /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/,
  mobileRegex: /^[0-9]{10}$/,
  eiaRegex: /^[0-9]{13}$/,
  ifscRegex: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  MIN_YEAR: new Date(1945, 0, 1),
};

export default config;
