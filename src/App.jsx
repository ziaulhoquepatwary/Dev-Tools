import React from 'react'
import Navbar from './share/Navbar'
import Banner from './components/Banner'
import StatsSection from './components/StatsSection'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <StatsSection />
            <GetStarted />
            <Footer />
        </>
    )
}

export default App