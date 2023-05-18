/**
 * google oAuth config
 */

//google oAuth
const authEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
// const redirectUri = "http://localhost:3000/MonaLisaAndTheBloodMoon/main";
const redirectUri = "https://mona-lisa-and-the-blood-moon.netlify.app/main"
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const scopes =
    "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
export const getTokenEndpoint = "https://oauth2.googleapis.com/token";
export const getTokenBody = `client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&grant_type=authorization_code&prompt=consent`
