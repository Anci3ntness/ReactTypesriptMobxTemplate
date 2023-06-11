import { makeAutoObservable } from "mobx"

export interface ITempStore {
	temp: string
}

class TempStore implements ITempStore {
	private _temp
	constructor() {
		this._temp = ""
		makeAutoObservable(this)
	}
	get temp() {
		return this._temp
	}
}

export default new TempStore() as TempStore
