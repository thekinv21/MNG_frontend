import { useState } from 'react'

import { ILogin } from '@/types/auth.types'

import { useRoute } from '@/hooks/useRoute'

import { AuthService } from '@/services/auth.service'

import { saveUserToStorage } from '@/helpers/auth.helper'
import { ROUTES } from '@/navigation/routes'

export const useLogin = () => {
	const { route } = useRoute()

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleLogin = async () => {
		const payload: ILogin = {
			email: email.trim(),
			password: password.trim()
		}

		try {
			const response = await AuthService.login(payload)

			if (response.status >= 200 && response.status < 300) {
				saveUserToStorage(response.data)
				route.navigate(ROUTES.MAIN as never)
			}
		} catch (error) {
			console.log('error', error)
		}
	}

	const handleRegister = () => {
		route.navigate(ROUTES.REGISTER as never)
	}

	return {
		email,
		password,
		setEmail,
		setPassword,
		handleRegister,
		handleLogin
	}
}
