import Axios from 'axios';

const BASE_URL = "https://post-seva-server.onrender.com/api/staff";

// REGISTER
export const createUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/register`, userDetails);
    const response = task.data;
    return response;
}

// LOGIN
export const loginUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/login`, userDetails);
    const response = task.data;
    return response;
}

// User Verify
export const userVerify = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/staff-verify-token`, userDetails);
    const response = task.data;
    return response;
}

// Token Availability
export const verifyId = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/check-user-id`, userDetails);
    const response = task.data;
    return response;
}