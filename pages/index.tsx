import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import Navbar from '../Components/Navbar'
import Photocards from '../Components/Photocards'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
    <Photocards/>
    <Map/>
    <Footer/>
    </>
  )
}

export default Home
