import * as SecureStore from 'expo-secure-store'
import axios from 'axios'

import { API_URL } from '@/config/api.config'

import { getContentType } from './api.helper'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export const axiosMultiPart = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'multipart/form-data'
	}
})

axiosInstance.interceptors.request.use(config => {
	const accessToken = SecureStore.getItem('accessToken')
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

let retryCount = 0 // Initialize retry count

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	async error => {
		const config = error.config

		return Promise.reject(error)
	}
)
