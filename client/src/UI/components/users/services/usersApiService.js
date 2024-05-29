import axios from 'axios';

// https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users
// const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:9191";

export const login = async (user) => {
    try {
        const { data } = await axios.post(`${apiUrl}/users/login`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}
export const signup = async (user) => {
    try {
        const { data } = await axios.post(`${apiUrl}/users/signup`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getUsersByID = async (userId) => {
    try {
        const { data } = await axios.get(`${apiUrl}/users/${userId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const updateUser = async (user, id) => {
    try {
        const { data } = await axios.put(`${apiUrl}/users/${id}`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}