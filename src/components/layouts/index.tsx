import Header from './header'
import Footer from './footer'
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