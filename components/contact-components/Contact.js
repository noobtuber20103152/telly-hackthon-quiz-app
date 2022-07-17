import React, { useState } from 'react'
// import Footer from '../Homapage-Components/Footer'
import ContactForm from './ContactForm'
import Head from "next/head"
function Contact() {

    return <>
        <Head>
            <title>Contact Page</title>
        </Head>
        <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.662272759694!2d75.53365521508933!3d31.395874581410894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1657642082582!5m2!1sen!2sin" className='w-full h-[28rem]' style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <div className='my-6'>
            <h1 className='mt-3 text-3xl font-light tracking-[0.3rem] uppercase text-center' >contact us today</h1>
            <p className='mt-2 text-xl font-light uppercase text-center'>THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</p>
        </div>
        <ContactForm />
        {/* <Footer /> */}
    </>
}

export default Contact