import React,{useState,useEffect} from 'react'
import Loader from '../utils/Loader'
import Footer from "../Footer"
import Banner from './banner';
// import Brand from './brand';
import HTW from './HTW'
import Sub from './subscribe'
import Live from './Live'
import Course from './Course';

import Navbar from '../utils/Navbar'

export default function Home(props) {
  // const [loading , isLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => isLoading(false), 1500)
  // }, [])

  // if (loading) {
  //   return <Loader />
  // }
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      {/* <Brand /> */}
      <HTW />
      <Course />
      <Live />
      <Sub />
      <Footer />
    </React.Fragment>
  )
}