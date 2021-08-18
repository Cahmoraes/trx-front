import { useState, createContext, useCallback, useContext } from 'react'

const SideCartContext = createContext()

export function SideCartProvider({ children }) {
	const [sideCartState, setSideCartState] = useState(false)

	const handleClickToggleSideCart = useCallback(() => {
		setSideCartState((state) => {
			return !state
		})
	}, [])

	return (
		<SideCartContext.Provider
			value={{
				sideCartState,
				handleClickToggleSideCart,
			}}
		>
			{children}
		</SideCartContext.Provider>
	)
}

export function useSideCart() {
	return useContext(SideCartContext)
}
