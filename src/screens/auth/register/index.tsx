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

import { useRegister } from './useRegister'

const Register: FC = () => {
	const { data, handleChange, handleLogin, handleRegister } = useRegister()

	return (
		<View className='flex-1  items-center justify-center'>
			<View className='flex flex-col items-center justify-center'>
				<Image className='h-80 w-80' source={ImagesAssets.loginLogo} />
			</View>

			<View className='w-full px-8'>
				<TextInput
					placeholder='İsim giriniz...'
					value={data.firstName}
					onChangeText={(text: string) => handleChange('firstName', text)}
					autoCapitalize='none'
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TextInput
					showSoftInputOnFocus={false}
					placeholder='Soyisim giriniz...'
					value={data.lastName}
					onChangeText={(text: string) => handleChange('lastName', text)}
					autoCapitalize='none'
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TextInput
					showSoftInputOnFocus={false}
					placeholder='E-posta giriniz..'
					value={data.email}
					onChangeText={(text: string) => handleChange('email', text)}
					autoCapitalize='none'
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TextInput
					showSoftInputOnFocus={false}
					placeholder='Telefon numara giriniz...'
					value={data.phoneNumber}
					onChangeText={(text: string) => handleChange('phoneNumber', text)}
					autoCapitalize='none'
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TextInput
					showSoftInputOnFocus={false}
					placeholder='Şifre giriniz...'
					value={data.password}
					onChangeText={(text: string) => handleChange('password', text)}
					autoCapitalize='none'
					secureTextEntry={true}
					className={
						'mt-3 w-full rounded-lg bg-gray-200 p-2.5 transition-all duration-200 ease-in-out'
					}
				/>

				<TouchableHighlight
					onPress={handleRegister}
					underlayColor={'none'}
					className='mt-5 w-full rounded-lg bg-green-700 p-2.5'
				>
					<Text className=' text-center text-sm font-semibold uppercase text-gray-50'>
						Kayıt Ol
					</Text>
				</TouchableHighlight>

				<View className='my-5 flex flex-row items-center'>
					<View className='h-[1px] flex-1 bg-gray-400' />
					<Text className='w-16 text-center'>Veya</Text>
					<View className='h-[1px] flex-1 bg-gray-400' />
				</View>

				<View className='flex flex-row items-center justify-center'>
					<Text className='text-gray-500'>Hesabınız varsa? </Text>
					<Pressable onPress={handleLogin}>
						<Text className='ml-1 text-green-700'>Giriş Yap</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default Register
