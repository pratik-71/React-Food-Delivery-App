import React from 'react'
import Layout from '../../components/layout/Layout'






import Section1 from './Section1'
import "../../styles/Home_style.css"
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Home = () => {

  
  return (
    <>
    <Layout>
      {/* Home section hero banner */}
      <Section1/>

      {/* About section layout banner */}
      <Section2/>

      {/* Menu section 3 */}
      <Section3/>

      {/* Home promotion Section 4 */}
      <Section4/>
      
    </Layout>
    </>
  )
}

export default Home
