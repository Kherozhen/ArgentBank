export const USER_INFO = "USER_INFO";

export const userInfo = (userName) => ({
    type: USER_INFO,
    payload: userName,
});

