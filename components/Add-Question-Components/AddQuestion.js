import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
function AddQuestion() {
    const [previoudAddQuesionData, setprevioudAddQuestionData] = useState();
    const [callEff, setcallEff] = useState(true);

    const router = useRouter();
    const { slug } = router.query;
    const [addQuestionData, setaddQuestionData] = useState({ multiCorrect: false, questionStatement: "", options: [], score: "", correct: "" })
    useEffect(() => {
        async function getData() {
            let data = await fetch("/api/createquiz/getSingleQuizData", {
                method: "GET",
                headers: {
                    'token': slug
                }
            })
            data = await data.json();
            setprevioudAddQuestionData(data);
        }
        getData();
    }, [])
    useEffect(() => {
        async function getData() {
            let data = await fetch("/api/createquiz/getSingleQuizData", {
                method: "GET",
                headers: {
                    'token': slug
                }
            })
            data = await data.json();
            setprevioudAddQuestionData(data);
        }
        getData();
    }, [callEff])
    const onchange = (e) => {
        setaddQuestionData({ ...addQuestionData, [e.target.name]: e.target.value });

    }
    const [options, setoptions] = useState({ option1: "", option2: "", option3: "", option4: "" })
    const onChangeOptions = (e) => {
        setoptions({ ...options, [e.target.name]: e.target.value })
    }
    const addQuestion = async () => {
        addQuestionData.options.push(options.option1)
        addQuestionData.options.push(options.option2)
        addQuestionData.options.push(options.option3)
        addQuestionData.options.push(options.option4)
        // console.log(addQuestionData);
        console.log(addQuestionData);
        let data = await fetch("/api/createquiz/AddQuestionToQuiz", {
            method: "POST",
            headers: {
                "token": slug,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(addQuestionData)
        })
        data = await data.json();
        if (data.status == 200) {
            setcallEff(!callEff)
            setoptions({ option1: "", option2: "", option3: "", option4: "" })
            setaddQuestionData({ multiCorrect: false, questionStatement: "", options: [], score: "", correct: "" })
        }
    }
    return <>
        <div className=''>
            <div className='w-11/12 md:w-6/12 mx-auto  px-4 py-2 my-2'>
                <div className='my-2'>
                    <h1 className="text-2xl">Total question added - {previoudAddQuesionData && previoudAddQuesionData[0].questions.length}</h1>
                </div>
                <div className=''>
                    <input onChange={onchange} value={addQuestionData.questionStatement} className='w-full px-6 py-2 border' name="questionStatement" placeholder='Enter your question statement' type="text" />
                </div>
                <div className='w-full border flex flex-col justify-start  px-4 py-2 my-2'>
                    <div className='flex my-2'>
                        <input onChange={onChangeOptions} value={options.option1} className='w-6/12 border px-4 py-2 mx-2' name="option1" placeholder='Option 1' type="text" />
                        <input onChange={onChangeOptions} value={options.option2} className='w-6/12 border px-4 py-2 mx-2' name="option2" placeholder='Option 2' type="text" />
                    </div>
                    <div className='flex  my-2'>
                        <input onChange={onChangeOptions} value={options.option3} className='w-6/12 border px-4 py-2 mx-2' name="option3" placeholder='Option 3' type="text" />
                        <input onChange={onChangeOptions} value={options.option4} className='w-6/12 border px-4 py-2 mx-2' name="option4" placeholder='Option 4' type="text" />
                    </div>
                    <div className='flex  my-2'>
                        <input onChange={onchange} value={addQuestionData.correct} className='w-6/12 border px-4 py-2 mx-2' name="correct" placeholder='Correct Answer' type="text" />
                        <input onChange={onchange} value={addQuestionData.score} className='w-6/12 border px-4 py-2 mx-2' name="score" placeholder='Score for the question' type="text" />
                    </div>
                    <div className='flex my-6'>
                        <button onClick={addQuestion} className='px-3 py-2 '>Confirm Question</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AddQuestion