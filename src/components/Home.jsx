import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/hand-holds-user-person-icon-interface-blue-background-user-symbol-your-web-site-design-logo-app-ui-banner_150455-5212.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Navbar/>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="col-12 text-center">
                    <div className="row justify-content-center">
                        <h1>Welcome! </h1>
                        <h3>All your details in one safe place</h3>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home