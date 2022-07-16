import React from 'react'

function QuizQuestionComponent(props) {
    return <>
        <div className=' my-5 mb-10'>
            <div className='mx-auto md:w-7/12 w-11/12'>
                <div className=''>
                    <h1 className='text-xl font-bold'>{props.questionStatement}</h1>
                </div>
                <div className=' mt-6'>
                    <div className="form-check my-2">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            {props.option1}
                        </label>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            {props.option2}
                        </label>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            {props.option3}
                        </label>
                    </div>
                    <div className="form-check my-2">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            {props.option4}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default QuizQuestionComponent