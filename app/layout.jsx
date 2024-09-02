import '@/assets/styles/globals.css'
import React from 'react'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'

const MainLayout = ( {children} ) => {
  return (
    <html>
        <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
  )
}

export default MainLayout