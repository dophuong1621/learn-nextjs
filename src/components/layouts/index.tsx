import Header from './header'
import Footer from './footer'
import { ReactNode } from 'react'
// import '@/styles/home.css';
type LayoutProps = {
  children: ReactNode,
}

export default function Layout({ children }:LayoutProps) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}