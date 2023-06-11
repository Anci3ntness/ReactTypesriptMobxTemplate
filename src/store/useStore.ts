import { createContext, useContext } from "react"
import TempStore from "./stores/templateStore"

const store = {
	tempStore: TempStore,
}

export const StoreContext = createContext(store)

export const useStore = () => {
	return useContext<typeof store>(StoreContext)
}

export default store
