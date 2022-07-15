import Head from 'next/head'
import Image from 'next/image'
import FrontHomePage from '../components/Homepage-Components/FrontHomePage'
import Navbar from '../components/Homepage-Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
  <Navbar/>
  <FrontHomePage/>
  </>
}
