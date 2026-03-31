import React from 'react'
import Navbar from './share/Navbar'
import Banner from './components/Banner'
import StatsSection from './components/StatsSection'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import DevTools from './components/DevTools'

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <StatsSection />
            <DevTools />
            <Pricing />
            <GetStarted />
            <Footer />
        </>
    )
}

export default App