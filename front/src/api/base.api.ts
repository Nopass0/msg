export const isDebug = true;
export const baseUrl = "http://localhost:3000/";

export const getApiUrl = (url: string) => {
  return baseUrl + url;
};
