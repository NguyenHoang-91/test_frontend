import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AdBanner from '../components/AdBanner'
import Carousel from '../components/Carousel'
import Featured from '../components/Featured'
import Topic from '../components/Topic'
import Popular from '../components/Popular'
import PlaceHolder from '../assets/imgs/placeholder.jpg'
import CategoryPlaceHolder from '../assets/imgs/category_placeholder.jpg'
import Banner from '../assets/imgs/ad_banner.jpg'


const HomePage = ({ fetchNewestPosts, fetchAllCategories ,fetchNewestPostsByCategory}) => {
  return (
    <>
      <Navbar />
      <Carousel fetchNewestPosts={fetchNewestPosts} fetchAllCategories={fetchAllCategories} placeHolder={PlaceHolder} categoryPlaceHolder={CategoryPlaceHolder} />
      <Featured fetchNewestPosts={fetchNewestPosts} placeHolder={PlaceHolder}/>
      <Topic fetchNewestPostsByCategory={fetchNewestPostsByCategory} fetchAllCategories={fetchAllCategories} placeHolder={PlaceHolder}/>
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto py-8 px-4 gap-10 w-full">
        {/* Main Content */}
        <section className="w-full lg:w-3/4 pl-0 lg:pl-6">
          <Popular fetchNewestPosts={fetchNewestPosts} placeHolder={PlaceHolder} title='Popular'/>
          <AdBanner Banner={Banner}/>
          <Popular fetchNewestPosts={fetchNewestPosts} placeHolder={PlaceHolder} title='Latest'/>
        </section>
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <Sidebar />
        </aside>
      </main>
      <Footer />
    </>
  )
}

export default HomePage