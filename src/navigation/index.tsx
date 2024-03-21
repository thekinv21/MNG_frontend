import { createStackNavigator } from '@react-navigation/stack'

import { useAuth } from '@/hooks/useAuth'

import { ROUTES } from './routes'
import LoginPage from '@/screens/auth/login'
import Register from '@/screens/auth/register'
import Main from '@/screens/main'

const Stack = createStackNavigator()

export function Routes() {
	const { jwtToken } = useAuth()

	return (
		<Stack.Navigator
			initialRouteName={jwtToken ? ROUTES.MAIN : ROUTES.LOGIN}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name={ROUTES.LOGIN} component={LoginPage} />
			<Stack.Screen name={ROUTES.REGISTER} component={Register} />
			<Stack.Screen name={ROUTES.MAIN} component={Main} />
		</Stack.Navigator>
	)
}
