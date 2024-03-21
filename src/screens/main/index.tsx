import { FontAwesome6 } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'

import Home from '../home'
import Location from '../location'
import Report from '../report'
import Settings from '../settings'

import { ROUTES } from '@/navigation/routes'

const Tab = createBottomTabNavigator()

const Main: FC = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name={ROUTES.HOME}
				component={Home}
				options={{
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='home'
							size={24}
							color={focused ? '#f97316' : '#d4d4d4'}
						/>
					)
				}}
			/>

			<Tab.Screen
				name={ROUTES.REPORT}
				component={Report}
				options={{
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='plus-square-o'
							size={24}
							color={focused ? '#f97316' : '#d4d4d4'}
						/>
					)
				}}
			/>
			<Tab.Screen
				name={ROUTES.LOCATION}
				component={Location}
				options={{
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
					tabBarIcon: ({ focused }) => (
						<FontAwesome6
							name='location-crosshairs'
							size={22}
							color={focused ? '#f97316' : '#d4d4d4'}
						/>
					)
				}}
			/>

			<Tab.Screen
				name={ROUTES.SETTINGS}
				component={Settings}
				options={{
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name='gear'
							size={24}
							color={focused ? '#f97316' : '#d4d4d4'}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default Main
