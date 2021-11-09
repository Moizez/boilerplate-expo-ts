export type TAuth = {
	token?: string,
	signed?: boolean,
	loading?: boolean,
	onboard?: boolean
}

export type TUser = {
	user: UserState,
	loading: boolean
}

export type TStorageless = {
	activities?: Array<{}>,
	alert: TAlert
}

export type GlobalState = {
	auth: TAuth,
	user: TUser,
	storageless: TStorageless
}

type UserState = {
	id: string,
	name: string,
	email: string,
	age: number,
	phone: string
}

export type TAlert = {
	visible?: boolean,
	message: string
}

export type TActionAuth = {
	type?: string,
	payload?: TAuth
}

export type TActionUser = {
	type?: string,
	payload?: TUser
}

export type TActionStorageless = {
	type?: string,
	payload?: TStorageless,
	key?: string
}