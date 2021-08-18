import { Route as RouteDOM } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Overlay } from '../components/Overlay'

export function Route({ hasHeader = true, hasFooter = true, ...rest }) {
	return (
		<>
			{hasHeader && <Header />}
			<Overlay />
			<RouteDOM {...rest} />
			{hasFooter && <Footer />}
		</>
	)
}
