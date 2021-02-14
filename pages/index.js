import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hello world</h1>
      </div>
      <Footer />
    </>
  )
}
export default Home
