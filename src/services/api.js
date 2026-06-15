import axios from "axios";
import {getAccessToken,getRefreshToken,setTokens,clearTokens} from "./tokenService";
import {useNavigate} from "react-router-dom";

const authApi = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        console.log("TOKEN:", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle Expired Token
authApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (originalRequest.url.includes("/user/refresh")) {
            return Promise.reject(error);
        }
        // Access token expired
        if( error.response?.status === 401 && !originalRequest._retry ) {
            originalRequest._retry = true;
            try{
                const refreshToken = getRefreshToken();
                const response = await axios.post(
                    "http://localhost:8080/api/user/refresh",
                    {
                        refreshToken
                    }
                );
                const newAccessToken = response.data.accessToken;
                // Save new access token
                setTokens(newAccessToken);
                // Retry original request
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return authApi(originalRequest);
            }catch(refreshError){
                clearTokens();
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default authApi;