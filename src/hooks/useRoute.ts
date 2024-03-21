import { useNavigation } from '@react-navigation/native'

export const useRoute = () => {
	const route = useNavigation()

	return {
		route
	}
}
