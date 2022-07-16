import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import QuizQuestionComponent from './QuizQuestionComponent';
function QuizPage() {
    const router = useRouter();
    // const [GiveQuiz, setGiveQuiz] = useState(true)
    const [submitSuccessTest, setsubmitSuccessTest] = useState(false);
    const { slug } = router.query;
    const [count, setcount] = useState(0);
    const [QuestionData, setQuestionData] = useState();
    const [UserSubmitQuizData, setUserSubmitQuizData] = useState();
    const [callEff, setcallEff] = useState(true)
    useEffect(() => {
        async function getData() {
            let data = await fetch("/api/createquiz/getSingleQuizData", {
                method: "GET",
                headers: {
                    "token": slug
                }
            })
            data = await data.json();
            setQuestionData(data);
            setUserSubmitQuizData(data);
        }
        getData();
    }, [])
    useEffect(() => {
        let date = new Date();
        let currentDay = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
        let currentMonth = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
        let currectYear = date.getFullYear();
        let currentHour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        let currentMinute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        let currentSecond = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getMinutes()}`;
        let currentDate = `${currentDay}:${currentMonth}:${currectYear}:${currentHour}:${currentMinute}:${currentSecond}`;
        // console.log(currentDate);
        if (QuestionData) {
            let startTime = QuestionData[0].startTime;
            let endTime = QuestionData[0].endTime;
            console.log(startTime);
            console.log(currentDate);
            console.log(endTime);
            let yes = (startTime < currentDate) && (endTime > currentDate);
            // setGiveQuiz(yes);
            // setGiveQuiz((QuestionData[0].startTime < currentDate) && (QuestionData[0].endTime > currentDate))
            // console.log(GiveQuiz)
        }
    }, [callEff])
    const [chooseOption, setchooseOption] = useState({ option1: false, option2: false, option3: false, option4: false });
    const ChangeOptions = (id) => {
        console.log(id)
        if (id == 1) {
            setchooseOption({ option1: true, option2: false, option3: false, option4: false })
        }
        else if (id == 2) {
            setchooseOption({ option1: false, option2: true, option3: false, option4: false })
        }
        else if (id == 3) {
            setchooseOption({ option1: false, option2: false, option3: true, option4: false })
        }
        else if (id == 4) {
            setchooseOption({ option1: false, option2: false, option3: false, option4: true })
        }
    }
    const nextQuestion = () => {
        if (chooseOption.option1 == true) {
            UserSubmitQuizData[0].questions[count].correct = UserSubmitQuizData[0].questions[count].options[0];
        }
        else if (chooseOption.option2 == true) {
            UserSubmitQuizData[0].questions[count].correct = UserSubmitQuizData[0].questions[count].options[1];
        }
        else if (chooseOption.option3 == true) {
            UserSubmitQuizData[0].questions[count].correct = UserSubmitQuizData[0].questions[count].options[2];
        }
        else if (chooseOption.option4 == true) {
            UserSubmitQuizData[0].questions[count].correct = UserSubmitQuizData[0].questions[count].options[3];
        }
        else {
            UserSubmitQuizData[0].questions[count].correct = "";
        }
        setchooseOption({ option1: false, option2: false, option3: false, option4: false })
        setcount(count + 1);
        console.log(UserSubmitQuizData[0].questions[count].correct)
    }
    const submitUserData = async () => {

        console.log(QuestionData[0]._id)
        UserSubmitQuizData = UserSubmitQuizData[0];
        UserSubmitQuizData.id = QuestionData[0]._id;
        delete UserSubmitQuizData["_id"];
        let data = await fetch("/api/usersubmit/submitquiz", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserSubmitQuizData)
        })
        data = await data.json();
        console.log(data);
        setQuestionData(null)
        setsubmitSuccessTest(true)
    }
    return <>
        {/* {GiveQuiz && <h1>{GiveQuiz}</h1>} */}
        { QuestionData && count < QuestionData[0].questions.length &&
            <div className=' my-5 mb-10'>
                <div className='mx-auto md:w-7/12 w-11/12'>
                    <div className=''>
                        <h1 className='text-xl font-bold'>{QuestionData[0].questions[count].questionStatement}</h1>
                    </div>
                    <div className=' mt-6'>
                        <div className="form-check my-2">
                            <input onClick={() => ChangeOptions(1)} name="option1" className={`${chooseOption.option1 ? 'bg-blue-500' : ''}  form-check-input appearance-none h-4 w-4 border transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                {QuestionData[0].questions[count].options[0]}
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input onClick={() => ChangeOptions(2)} name="option1" className={`${chooseOption.option2 ? 'bg-blue-500' : ''}  form-check-input appearance-none h-4 w-4 border transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                {QuestionData[0].questions[count].options[1]}
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input onClick={() => ChangeOptions(3)} name="option1" className={`${chooseOption.option3 ? 'bg-blue-500' : ''}  form-check-input appearance-none h-4 w-4 border transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                {QuestionData[0].questions[count].options[2]}
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input onClick={() => ChangeOptions(4)} name="option1" className={`${chooseOption.option4 ? 'bg-blue-500' : ''}  form-check-input appearance-none h-4 w-4 border transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                {QuestionData[0].questions[count].options[3]}
                            </label>
                        </div>
                    </div>
                    {count < QuestionData[0].questions.length && <button onClick={() => setcount(count - 1)} className='px-3 py-2'>Previous Question</button>}
                    {count < QuestionData[0].questions.length && <button onClick={nextQuestion} className='px-3 py-2'>Next Question</button>}

                </div>
            </div>
        }
        {QuestionData && count >= QuestionData[0].questions.length &&
            <div className='my-6'>
                <div className='md:w-7/12 w-11/12 mx-auto'>
                    <button onClick={() => setcount(count - 1)} className='px-3 py-2'>Previous Question</button>
                    <button onClick={submitUserData} className='px-3 py-2'>Submit Quiz</button>
                </div>
            </div>
        }
        {submitSuccessTest && <div className=''>
            <div className='mx-auto md:w-7/12 w-11/12'>
                <div className='bg-green-700 py-4 px-3 rounded-lg'>
                    <h1 className='text-white'>Your quiz has been submitted successfully</h1>
                </div>
            </div>
        </div>}
        {/* {!GiveQuiz &&
            <div className=''>
                <div className='mx-auto md:w-7/12 w-11/12'>
                    <div className='bg-red-700 py-4 px-3 rounded-lg'>
                        <h1 className='text-white'>Quiz was ended</h1>
                    </div>
                </div>
            </div>} */}
    </>
}

export default QuizPage