import Header from './header'
import Footer from './footer'
import Image from 'next/image'
import Link from 'next/link';
// import '@/styles/home.css';


export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}