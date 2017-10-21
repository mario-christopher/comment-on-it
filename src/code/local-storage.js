const USER_NAME = 'userName';

export const Storage = {
    set: (userName) => {
        localStorage.setItem(USER_NAME, userName);
    },

    get: () => {
        return localStorage.getItem(USER_NAME);
    },

    clear: () => {
        localStorage.removeItem(USER_NAME);
    }
}