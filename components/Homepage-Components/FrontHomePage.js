import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FrontHomePage() {
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
    const createQuiz = () => {
        if (loggedInUser && loggedInUser.isLoggedIn) {
            router.push(`/create/${loggedInUser.AdminData._id}`)
        }
        else {
            toast.warn("Please log in first", {
                position: toast.POSITION.TOP_LEFT
            })
        }

    }
    return <>
        <ToastContainer />
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcom to Quizzly
                    </h1>
                    <p className="mb-8 leading-relaxed">Our mission is to create a user friendly quizz webapp where quiz admin could easily register and prepare a quiz . And using it's unique quiz code anyone in the world who is eligible to give that quiz could take up that quiz.</p>
                    <div className="flex justify-center">
                        <button onClick={createQuiz} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create a quiz</button>
                        <Link href="/takequiz">
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Take a quiz</button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://bluemetropolis.org/wp-content/uploads/2020/10/quiz.jpg" />
                </div>
            </div>
        </section>
    </>
}

export default FrontHomePage