import axios from 'axios';

// כתובת שרת API https://monkfish-app-z9uza.ondigitalocean.app/bcard2
// const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:9191";

export const getCards = async () => {
    try {
        const response = await axios.get(`${apiUrl}/cards`);
        console.log(response);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getCard = async (cardId) => {
    try {
        const response = await axios.get(`${apiUrl}/cards/${cardId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getMyCards = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getBizNumberCard = async (id) => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards/biz-number/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const deleteCard = async (id) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/cards/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const createCard = async (card) => {
    try {
        const { data } = await axios.post(`${apiUrl}/cards`, card);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const updateCard = async (cardId, card) => {
    try {
        const { data } = await axios.put(`${apiUrl}/cards/${cardId}`, card);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const changeLikeStatus = async (cardId) => {
    try {
        const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}