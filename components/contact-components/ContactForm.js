import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var validator = require("email-validator");
function ContactForm() {

    const [formData, setformData] = useState({ username: "", email: "", message: "" })
    const onchange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const submit = async () => {
        if (formData.username.length == 0 || formData.email.length == 0 || formData.message.length == 0) {
            toast.warn("Please check form data", {
                position: toast.POSITION.TOP_LEFT
            })
            return;
        }
        if (validator.validate(formData.email) == false) {
            toast.warn("Please enter a valid email", {
                position: toast.POSITION.TOP_LEFT
            })
            return;
        }
        let data = await fetch("/api/contact/contact", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': "application/json"
            }
        })
        data = await data.json();
        if (data.status == 200) {
            toast.success("Your messag send successfully", {
                position: toast.POSITION.TOP_LEFT
            })
            setformData({ username: "", email: "", message: "" })
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        else {
            toast.warn("OOPS! some issue there please try again", {
                position: toast.POSITION.TOP_LEFT
            })
        }
    }
    return <>
        <ToastContainer />
        <div className='flex justify-center mt-6 py-7'>
            <div className=' w-10/12 md:w-8/12'>
                <div className='my-3'>
                    <input onChange={onchange} value={formData.username} className="shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700" id="username" name="username" type="text" placeholder="Enter your name..." />
                </div>
                <div className='my-3'>
                    <input onChange={onchange} value={formData.email} className="shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700" id="username" name="email" type="text" placeholder="Enter your email..." />
                </div>
                <div className='my-3'>
                    <textarea onChange={onchange} value={formData.message} className="shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700" rows={7} id="username" name="message" type="text" placeholder="Enter your message..." ></textarea>
                </div>
                <div className='my-3'>
                    <button onClick={submit} className='py-2 bg-blue-400 px-2 text-white rounded-sm'>Submit</button>
                </div>
            </div>
        </div>
    </>
}

export default ContactForm