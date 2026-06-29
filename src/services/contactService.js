import authApi from "./api";
import { useState } from "react";

export const fetchDetails = async (page,pageSize) => {
    const params = {};
    params.number = page;
    params.size = pageSize;
    const response = await authApi.get(`/contact`, { params } );
    return response.data;
}

export const fetchContacts = async (username) => {
    const response = await authApi.get(`/user?username=${username}`);
    return response.data;
}

export const updateMessage = async (id, updatedMessage) => {
    const response = await authApi.put(`/contact/${id}`, { message: updatedMessage });
    return response.data;
}

export const searchContacts = async (status, name, page, pageSize) => {
    if( status === "" && name === ""){
        return fetchDetails(page,pageSize);
    }
    const params = {};
    params.page = page;
    params.pageSize = pageSize;
    if (status) {
        params.status = status;
    }
    if (name) {
        params.name = name;
    }
    const response = await authApi.get(`/contact`, { params });
    return response.data;
}

export const submitContact = async (contactData) => {
    const response = await authApi.post(`/contact/submit`, contactData);
    return response.data;
}