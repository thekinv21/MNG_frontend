export const API_URL = 'http://192.168.1.99:8080/v1/api'

export const getAuthUrl = (pathname: string) => `${API_URL}/auth${pathname}`
