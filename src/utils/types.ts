export interface TAuth {
	token: string,
	signed: boolean,
	loading: boolean
}

export interface TUser {
	user: Object,
	loading: boolean
}

export interface GlobalState {
	auth: TAuth,
	user: TUser
}