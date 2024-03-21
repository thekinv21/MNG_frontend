export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data === 'object'
			? error.response.data.error
			: error.response.data
		: error.message
