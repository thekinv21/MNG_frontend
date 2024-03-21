import { FC } from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const Location: FC = () => {
	const INITIAL_REGION = {
		latitude: 41.015137,
		longitude: 28.97953,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	}

	return (
		<View className='flex-1'>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={{ flex: 1 }}
				initialRegion={INITIAL_REGION}
				zoomEnabled={true}
				zoomControlEnabled={true}
				zoomTapEnabled={true}
			/>
		</View>
	)
}

export default Location
