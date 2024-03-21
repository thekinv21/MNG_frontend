import { IUser } from './user.types'

// Types for tokens
export interface ITokens {
	access_token: string
	refresh_token: string
}

// Types for login
export interface ILogin {
	email: string
	password: string
}

// register

export interface IRegister {
	email: string
	password: string
	firstName: string
	lastName: string
	phoneNumber: string
}

// Types for login response user
export interface IAuthResponse extends ITokens {
	user: IUser
}
