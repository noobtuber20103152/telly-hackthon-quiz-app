import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { TbNumbers } from "react-icons/tb";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function QuizComponents(props) {
    const [display, setdisplay] = useState(true);
    const deleteItem = async (_id) => {
        console.log(_id);
        let data = await fetch("/api/createquiz/deleteQuiz", {
            method: "DELETE",
            headers: {
                token: _id,
            },
        });
        data = await data.json();
        if (data.status == 200) {
            toast.success("Quiz delete successfully", {
                postions: toast.POSITION.TOP_LEFT,
            });
            setdisplay(false);
        }
    };
    return (
        <>
            <ToastContainer />
            {display && (
                <div className="flex justify-center my-2">
                    <div className="hover:cursor-pointer w-full md:w-7/12 border rounded-[10px] flex md:flex-row flex-col mx-2 justify-between">
                        <div className=" md:w-3/12 w-full ">
                            <div className="mx-2 my-4">
                                <img className="w-full h-32" src="https://pixabay.com/get/ ga71fd0f5dcd5082f9fcaf51c0d9a4ac19ff4c2aa36b9357c598a8d5524dbfb2a492ce54d3f359d8256ce58873b7f55db573f842350c733bddd788d2c78a23219_1280.jpg" alt="" />
                            </div>
                        </div>
                        <div className="md:w-6/12 w-full ">
                            <div className="mx-2 my-4">
                                <div className="flex flex-col">
                                    <p className="text-green-400 text-lg mb-1">
                                        {props.createdAt}
                                    </p>
                                    <h1 className="text-2xl font-bold my-3">{props.name}</h1>
                                    <div className=" mt-1 flex items-center">
                                        <p className="text-lg mr-3"> <BsCodeSlash className="inline mx-1" />{" "} {props.totalQuestion} question </p>
                                        <p className="text-lg mx-3">
                                            <TbNumbers className="inline mx-1" />
                                            {props.totalScore} marks
                                        </p>
                                        <p className="text-lg mx-3">
                                            <BiTimeFive className="inline mx-1" />
                                            {props.duration} minutes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/12 w-full mx-auto my-auto  ">
                            <Link href={`/${props._id}`}>
                                <button className="px-3 py-2 mx-2 text-white bg-green-600">
                                    Analytics
                                </button>
                            </Link>
                            <button
                                onClick={() => deleteItem(props._id)}
                                className="px-3 py-2 mx-2 text-white bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default QuizComponents;
