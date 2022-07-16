import React, { useState } from 'react'
import { useRouter } from "next/router"
function Takequiz() {
    const router = useRouter();
    const [code, setcode] = useState()
    const gotoQuiz = () => {
        router.push(`/quizpage/${code}`)
    }
    return <>
        <div className='h-[90vh] bg-blue-600  flex justify-center items-center flex-col '>
            <input name="code" value={code} onChange={(e) => setcode(e.target.value)} className='px-3 py-2 outline-none my-2' type="text" />
            <button onClick={gotoQuiz} className='bg-green-600 px-3 py-2 text-white'>Take Quiz</button>
        </div>
    </>
}

export default Takequiz