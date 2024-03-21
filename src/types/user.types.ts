import { ILocation } from './location.types'

export interface IUser {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	authorities: string[]
	location?: ILocation
}
