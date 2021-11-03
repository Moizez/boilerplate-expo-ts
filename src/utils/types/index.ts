export interface TAuth {
	token: string,
	signed: boolean,
	loading: boolean
}

export interface TUser {
	user: Object,
	userForm: Object,
	form: {
		disabled: boolean,
		loading: boolean,
		saving: boolean
	}
}