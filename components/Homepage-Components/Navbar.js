import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
    const router = useRouter();
    const [loggedInUser, setloggedInUser] = useState()
    const [callEffect, setcallEffect] = useState(true)
    useEffect(() => {
        async function isLoggedInUser() {
            let data = await fetch("/api/admin/getuser", {
                method: "GET",
                headers: {
                    "token": window.localStorage.getItem("token")
                }
            })
            setloggedInUser(await data.json());
        }
        isLoggedInUser();
    }, [callEffect])
    const logout = () => {
        setcallEffect(!callEffect);
        window.localStorage.removeItem("token")
        toast.success("Logout successfully", {
            position: toast.POSITION.TOP_LEFT
        })
        router.push("/")
    }
    return <>
        <ToastContainer />
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Quizzly</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <a className="mr-5 hover:text-gray-900">Home</a>
                    </Link>
                    {loggedInUser && loggedInUser.isLoggedIn && loggedInUser.AdminData && <Link href={`/profile/${loggedInUser.AdminData._id}`}>
                        <a className="mr-5 hover:text-gray-900">Profile</a>
                    </Link>}
                    <Link href="/contact">
                        <a className="mr-5 hover:text-gray-900">Contact us</a>
                    </Link>
                </nav>
                {loggedInUser && !loggedInUser.isLoggedIn && <Link href="/signup">
                    <button className="inline-flex mx-2 marker: items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign up
                    </button>
                </Link>}
                {loggedInUser && !loggedInUser.isLoggedIn && <Link href="/login">
                    <button className="inline-flex mx-2 marker: items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    </button>
                </Link>}
                {loggedInUser && loggedInUser.isLoggedIn && <button onClick={logout} className="inline-flex  mx-2 marker:items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                </button>}
            </div>
        </header>
    </>
}

export default Navbar