import React from 'react'
import { useRouter } from "next/router"
function Leader() { 
    
    const router = useRouter();
    const { slug } = router.query;
    return <>
        {slug}
    </>
}

export default Leader