export const getAppUrl = (path: string) => {
  const appUrl = process.env.ORIGIN;
  return `${appUrl}/#/${path}`;
};
