import * as SecureStore from 'expo-secure-store'
import { useMemo } from 'react'

export const useAuth = () => {
	// accessToken is the key to the token stored in the SecureStore
	const jwtToken = SecureStore.getItem('accessToken')
	const user = SecureStore.getItem('user')

	return useMemo(
		() => ({
			jwtToken,
			user
		}),
		[jwtToken, user]
	)
}
