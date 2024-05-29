import { jwtDecode } from 'jwt-decode';

const TOKEN = 'token';

export const setTokenInLocalStorage = encodedToken => localStorage.setItem(TOKEN, encodedToken);

export const getUser = () => {
    try {
        const user = localStorage.getItem(TOKEN);
        return jwtDecode(user);
    } catch (error) {
        return null;
    }
}

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);