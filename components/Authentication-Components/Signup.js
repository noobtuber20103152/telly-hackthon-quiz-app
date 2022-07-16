import React, { useState } from 'react'
import { FiUserX } from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router"
import Link from 'next/link';
function Signup() {
    const router = useRouter();
    const [SignUpData, setSignUpData] = useState({ name: "", email: "", password: "", phone: "" })
    const onchange = (e) => {
        setSignUpData({ ...SignUpData, [e.target.name]: e.target.value })
    }
    const SubmitSignUpData = async () => {
        if (SignUpData.name.length == 0 || SignUpData.email.length == 0 || SignUpData.password.length == 0 || SignUpData.phone.length == 0) {
            toast.warn("Please check form should be fulfill", {
                position: toast.POSITION.TOP_LEFT
            })
            return;
        }
        let data = await fetch("/api/admin/signup", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(SignUpData)
        })
        data = await data.json();
        if (data.status == 200) {
            toast.success("Acoount created successfully", {
                position: toast.POSITION.TOP_LEFT
            })
            setTimeout(() => {
                router.push("/")
            }, 2000);
        }
        else if (data.status == 409) {

            toast.warn("Email already used", {
                position: toast.POSITION.TOP_LEFT
            })
        }
        else {
            toast.warn("Some internal error, Please try again in a while", {
                position: toast.POSITION.TOP_LEFT
            })
        }
    }
    return <>
        <ToastContainer />
        <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-4">
                    <div>
                        <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png" className="w-32 mx-auto" />
                    </div>
                    <div className="mt-2 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign up for Quizzly
                        </h1>
                        <div className="w-full flex-1 mt-0">
                            <div className="my-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2" > Or sign up with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input onChange={onchange} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" name="name" placeholder="Name" />
                                <input onChange={onchange} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="Email" name="email" placeholder="Email" />
                                <input onChange={onchange} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" name="password" placeholder="Password" />
                                <input onChange={onchange} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="number" name="phone" placeholder="Phone" />
                                <button onClick={SubmitSignUpData} className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                                    <FiUserX className='inline text-2xl' />
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <p className="mt-6 text-sm text-gray-600 w-full text-center block">
                                    <Link href="/login">
                                        <a className="border-b  border-gray-500 border-dotted blcok ml-5">
                                            Already have an account ?
                                        </a>
                                    </Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
                    ></div>
                </div>
            </div>

        </body>
    </>
}

export default Signup