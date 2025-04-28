import React from 'react'
import FollowUs from '../components/sidebar/FollowUs'
import NewSletter from '../components/sidebar/NewSletter'
import Trending from '../components/sidebar/Trending'
import SideBarImg from '../components/sidebar/SideBarImg'
import Tag from '../components/sidebar/Tag'

const Sidebar = () => {
    return (
        <>
            <FollowUs />
            <NewSletter />
            <SideBarImg />
            <Trending />
            <Tag />
        </>
    )
}

export default Sidebar