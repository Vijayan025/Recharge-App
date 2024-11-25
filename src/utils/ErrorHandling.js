export const parseErrorFromAPI = (error, defaultError = "Network Error!") =>
  error?.response?.data?.message
    ? error?.response?.data?.message
    : defaultError;
