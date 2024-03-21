import * as SecureStore from 'expo-secure-store'

import { IAuthResponse, ITokens } from '@/types/auth.types'

export const saveTokensToStorage = (data: ITokens) => {
	SecureStore.setItem('accessToken', data.access_token)
	SecureStore.setItem('refreshToken', data.refresh_token)
}

export const saveUserToStorage = (data: IAuthResponse) => {
	saveTokensToStorage(data)
	SecureStore.setItem('user', JSON.stringify(data.user))
}

/* remove token from Storage */

export const removeTokensFromStorage = () => {
	SecureStore.deleteItemAsync('accessToken')
	SecureStore.deleteItemAsync('refreshToken')
	SecureStore.deleteItemAsync('user')
}
