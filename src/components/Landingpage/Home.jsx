import React from 'react'
import Heading from './Heading'
import Section from './Section'
import Coursecard from './Coursecard'
import Plans from './Plans'
import Yourgols from './Yourgols'
import Datascience from './Datascience'
// import Login from './Login'
// import Signup from './Singup'



const Home = () => {


  return (
    <>
  <Heading/>
    <Datascience />
    <Section />
    <Coursecard />
    <Plans />
    <Yourgols />
    {/* <Login/> */}
    {/* <Signup/> */}
    </>
  )
}

export default Home;