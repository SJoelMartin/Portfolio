import axios from "axios";
import authApi from "./api";

const BASE_URL = "http://localhost:8080/api";

export const registerUser = async (userData) => {
    const res = authApi.post(`/user/register`, userData);
    return res.data;
};

export const loginUser = async (credentials) => {
    return authApi.post(`/auth/login`, credentials);
};