import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { AuthService } from '@/services/auth.service'

import { ROUTES } from '@/navigation/routes'

type TypeRegister = {
	email: string
	password: string
	firstName: string
	lastName: string
	phoneNumber: string
}

export const useRegister = () => {
	const route = useNavigation()
	const [data, setData] = useState<TypeRegister>({} as TypeRegister)

	const handleChange = (field: string, value: string) => {
		setData(prevState => ({
			...prevState,
			[field]: value
		}))
	}

	const handleLogin = () => {
		route.navigate(ROUTES.LOGIN as never)
	}

	const handleRegister = async () => {
		try {
			const response = await AuthService.register(data)

			if (response.status >= 200 && response.status < 300) {
				route.navigate(ROUTES.LOGIN as never)
			}
		} catch (error) {
			console.log('error', error)
		}
	}

	return {
		data,
		setData,
		handleLogin,
		handleChange,
		handleRegister
	}
}
