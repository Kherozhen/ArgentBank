

export const userInfo = (userName, firstName) => ({
    type: USER_INFO,
    payload: { userName, firstName }
});

export const USER_INFO = "USER_INFO";