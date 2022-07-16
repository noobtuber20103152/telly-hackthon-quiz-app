import React from 'react'
import { useRouter } from "next/router"
import Navbar from '../../components/Homepage-Components/Navbar';
import Profile from '../../components/Profile-Components/Profile';
function slug() {

    return <>
        <Navbar />
        <Profile />
    </>
}

export default slug