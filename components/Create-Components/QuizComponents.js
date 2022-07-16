import React, { useState } from 'react'
import { useRouter } from "next/router"
function QuizComponents(props) {
    return <>

        <div className=''>
            <div className='w-11/12 md:w-6/12 mx-auto  px-4 py-2 my-2'>
                <div className=''>
                    <input className='w-full px-6 py-2 border' name="questionStatement" placeholder='Enter your question statement' type="text" />
                </div>
                <div className='w-full border flex flex-col justify-start  px-4 py-2 my-2'>
                    <div className='flex my-2'>
                        <input className='w-6/12 border px-4 py-2 mx-2' name="option1" placeholder='Option 1' type="text" />
                        <input className='w-6/12 border px-4 py-2 mx-2' name="option2" placeholder='Option 2' type="text" />
                    </div>
                    <div className='flex  my-2'>
                        <input className='w-6/12 border px-4 py-2 mx-2' name="option3" placeholder='Option 3' type="text" />
                        <input className='w-6/12 border px-4 py-2 mx-2' name="option4" placeholder='Option 4' type="text" />
                    </div>
                    <div className='flex  my-2'>
                        <input className='w-6/12 border px-4 py-2 mx-2' name="correctOption" placeholder='Correct Answer' type="text" />
                        <input className='w-6/12 border px-4 py-2 mx-2' name="score" placeholder='Score for the question' type="text" />
                    </div>
                    <div className='flex my-6'>
                        <button className='px-3 py-2 '>Confirm Question</button>
                        <button className='px-3 py-2 '>Complete</button>
                    </div>
                </div>
            </div>
        </div>
        {props.button && <div className=' px-8'>
            <div className="mt-6 mx-auto md:w-6/12 w-11/12">
                <button o className='px-3 py-2 border '>Create Quiz</button>
            </div>
        </div>}
    </>
}

export default QuizComponents