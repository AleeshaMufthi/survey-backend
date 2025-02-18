
export const attachTokenToCookie = (res, accessToken) => {
  const cookieOptions = {
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production", 
    maxAge: 24 * 60 * 60 * 1000, 
  };

  res.cookie("access_token", accessToken, cookieOptions);
};
