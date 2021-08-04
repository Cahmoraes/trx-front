import { Route as RouteDOM } from "react-router-dom"
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Route({ hasHeader = true, hasFooter = true, ...rest }) {
  return (
    <>
      {hasHeader && <Header />}
      <RouteDOM {...rest} />
      {hasFooter && <Footer />}
    </>
  )
}
