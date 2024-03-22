import { ImagesAssets } from 'assets/imageAsset'
import { FC } from 'react'
import {
	Image,
	Pressable,
	Text,
	TextInput,
	TouchableHighlight,
	View
} from 'react-native'

import { useLogin } from './useLogin'

const Login: FC = () => {
	const { handleRegister, ...rest } = useLogin()

	return (
		<View className='flex-1  items-center justify-center'>
			<View className='flex flex-col items-center justify-center'>
				<Image className='mt-40 h-80 w-80' source={ImagesAssets.loginLogo} />
			</View>

			<View className='w-full px-8'>
				<TextInput
					value={rest.email}
					onChangeText={text => rest.setEmail(text)}
					placeholder='E-posta giriniz..'
					autoCapitalize='none'
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TextInput
					value={rest.password}
					onChangeText={text => rest.setPassword(text)}
					placeholder='Şifre giriniz...'
					autoCapitalize='none'
					secureTextEntry={true}
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TouchableHighlight
					onPress={() => {
						rest.handleLogin()
					}}
					underlayColor={'none'}
					className='mt-5 w-full rounded-lg bg-green-700 p-2.5'
				>
					<Text className=' text-center text-sm font-semibold uppercase text-gray-50'>
						Giriş Yap
					</Text>
				</TouchableHighlight>

				<View className='my-5 flex flex-row items-center'>
					<View className='h-[1px] flex-1 bg-gray-400' />
					<Text className='w-16 text-center'>Veya</Text>
					<View className='h-[1px] flex-1 bg-gray-400' />
				</View>

				<View className='flex flex-row items-center justify-center'>
					<Text className='text-gray-500'>Hesabınız yok mu? </Text>
					<Pressable onPress={handleRegister}>
						<Text className='ml-1 text-green-700'>Kayıt Ol</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default Login
