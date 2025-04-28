import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="flex flex-col lg:flex-row max-w-7xl mx-auto py-8 px-4 gap-10 w-full">
                {/* Main Content */}
                <section className="w-full lg:w-3/4 pl-0 lg:pl-6">
                    <Outlet />
                </section>
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 space-y-6">
                    <Sidebar/>
                </aside>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout