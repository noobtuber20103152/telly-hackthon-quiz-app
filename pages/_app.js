import Navbar from '../components/Homepage-Components/Navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
function MyApp({ Component, pageProps }) {
  const [progress, setprogress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setprogress(100)
    })
  }, [])
  return <>
    <LoadingBar shadow={true} height={4} color='red' progress={progress} waitingTime={1000} onLoaderFinished={() => setprogress(0)} />
    <Component {...pageProps} />
  </>
}

export default MyApp
