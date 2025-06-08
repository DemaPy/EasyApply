import type { CookieOptions } from 'express';

export const getCookieOptions = (
  grantType: 'access' | 'refresh',
): CookieOptions => {
  if (grantType === 'access') {
    return {
      httpOnly: true,
      sameSite: 'strict',
      secure: [
        process.env.ORIGIN ?? '',
        process.env.ORIGIN_OPTIONS ?? '',
      ].includes('https://'),
      expires: new Date(Date.now() + 1000 * 60 * 60), // 60 minutes from now
    };
  }

  return {
    httpOnly: true,
    sameSite: 'strict',
    secure: [
      process.env.ORIGIN ?? '',
      process.env.ORIGIN_OPTIONS ?? '',
    ].includes('https://'),
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
  };
};
