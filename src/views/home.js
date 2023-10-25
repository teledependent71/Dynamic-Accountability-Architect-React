import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Accountability Architect</title>
        <meta property="og:title" content="Dynamic Accountability Architect" />
      </Helmet>
    </div>
  )
}

export default Home
