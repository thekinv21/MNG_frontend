import { ILogin, IRegister, ITokens } from '@/types/auth.types'

import { getAuthUrl } from '@/config/api.config'

import { axiosClassic, axiosInstance } from '@/api/api.interceptor'

export const AuthService = {
	async login(data: ILogin) {
		return axiosClassic.post(getAuthUrl('/signIn'), data)
	},

	async logout() {
		return axiosInstance.post(getAuthUrl('/logout'))
	},

	async getNewTokens(data: ITokens) {
		return axiosClassic.post(getAuthUrl('/refresh'), data)
	},

	async register(data: IRegister) {
		return axiosClassic.post(getAuthUrl('/signup'), data)
	}
}
