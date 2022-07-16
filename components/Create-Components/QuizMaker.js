import React, { useState } from 'react'
import QuizComponents from './QuizComponents'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function QuizMaker() {
    const router = useRouter();
    const { slug } = router.query;
    const [CreateQuizData, setCreateQuizData] = useState({ id: slug, startTime: "", endTime: "", name: "", duration: 0, totalScore: 0, totalQuestion: 0, question: [] })
    const onchange = (e) => {
        setCreateQuizData({ ...CreateQuizData, [e.target.name]: e.target.value })
    }
    const CreateQuiz = async () => {
        console.log(CreateQuizData);
        // return;
        if (CreateQuizData.startTime > CreateQuizData.endTime) {
            toast.warn("Start date should be smaller than end time", {
                position: toast.POSITION.TOP_LEFT
            })
            return;
        }
        let data = await fetch("/api/createquiz/quiz", {
            method: "POST",
            headers: {
                "token": slug,
                'Content-Type': "application/json"
            },
            body: JSON.stringify(CreateQuizData)
        })
        data = await data.json();
        console.log(data)
        if (data.status == 200) {
            let routes = data.quizdata._id;
            // console.log(routes);
            router.push(`/addquestion/${routes}`)
        }


    }
    return <>
        <ToastContainer />
        <div className=' my-6 px-0  md:px-8'>
            <div className='w-11/12 md:w-6/12 mx-auto'>
                <button onClick={CreateQuiz} className='px-3 py-2 mx-2 bg-blue-500 text-white'>Proceed the process</button>
            </div>
        </div>
        <div className=''>
            <div className='w-11/12 md:w-6/12 mx-auto  px-4 py-2 my-2'>
                <div className='w-full border flex flex-col justify-start  px-4 py-2 my-2'>
                    <div className='flex my-2'>
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="name" placeholder='Enter name of the quiz' type="text" />
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="duration" placeholder='Total duration for the quiz ( Minutes)' type="Number" />
                    </div>
                    <div className='flex my-2'>
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="totalScore" placeholder='Total Score' type="text" />
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="totalQuestion" placeholder='Total number of question' type="Number" />
                    </div>
                    <div className='flex my-2'>
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="startTime" placeholder='Start time in format' type="text" />
                        <input onChange={onchange} className='w-6/12 border px-4 py-2 mx-2' name="endTime" placeholder='End time in format' type="text" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default QuizMaker