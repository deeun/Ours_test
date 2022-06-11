import '../styles/globals.css'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className='oursApp'>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

export default MyApp
