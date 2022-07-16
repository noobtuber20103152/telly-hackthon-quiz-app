import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import QuizComponents from "./QuizComponents";
import Link from "next/link";
function Profile() {
  const router = useRouter();
  const [loggedInUser, setloggedInUser] = useState();
  const [quizData, setquizData] = useState();
  const [useCall, setuseCall] = useState(true);
  useEffect(() => {
    async function isLoggedInUser() {
      let data = await fetch("/api/admin/getuser", {
        method: "GET",
        headers: {
          token: window.localStorage.getItem("token"),
        },
      });
      data = await data.json();
      setloggedInUser(data);
      console.log(data);
      if (data.isLoggedIn) {
        setuseCall(!useCall);
      } else {
        router.push("/");
      }
    }
    isLoggedInUser();
  }, []);
  useEffect(() => {
    async function getquizData() {
      let data = await fetch("/api/createquiz/getAllQuizzesData", {
        method: "GET",
        headers: {
          token: loggedInUser ? loggedInUser.AdminData._id : "",
        },
      });
      data = await data.json();
      setquizData(data);
    }
    getquizData();
  }, [useCall]);
  const { slug } = router.query;
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-full md:w-8/12 border rounded-[10px] flex md:flex-row flex-col mx-2 justify-between ">
          <div className="w-full md:w-3/12  ">
            <div className="mx-2 my-4">
              <img
                className="w-full h-32"
                src="https://pixabay.com/get/ga71fd0f5dcd5082f9fcaf51c0d9a4ac19ff4c2aa36b9357c598a8d5524dbfb2a492ce54d3f359d8256ce58873b7f55db573f842350c733bddd788d2c78a23219_1280.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-6/12  ">
            <div className="mx-2 my-4">
              <div className="flex flex-col">
                <p className="text-green-400 text-lg mb-1">
                  {loggedInUser &&
                    loggedInUser.AdminData.createdAt.slice(0, 10)}
                </p>
                <h1 className="text-2xl font-bold my-3">
                  {loggedInUser && loggedInUser.AdminData.name}
                </h1>
                <div className=" mt-1 flex items-center">
                  <p className="text-lg mr-3">
                    <BsCodeSlash className="inline mx-1" />{" "}
                    {quizData && quizData.length} quizzes{" "}
                  </p>
                  <p className="text-lg mx-3">
                    <AiOutlineMail className="inline mx-1" />
                    {loggedInUser && loggedInUser.AdminData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 "></div>
        </div>
      </div>
      <div className="flex justify-center mt-6 ">
        <div className="flex md:w-8/12 w-11/12">
          <div className="my-2">
            <Link href={`/create/${slug}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-sm">
                Create new quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex md:w-8/12 w-11/12">
          <div className="my-2">
            <p className="text-xl">Recent Quizzes</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:w-7/12 w-11/12">
          {quizData && quizData.length == 0 && (
            <h1 className="text-2xl my-6 font-normal">
              There is no quiz available yet{" "}
            </h1>
          )}
        </div>
      </div>
      {quizData &&
        quizData.map((e) => {
          return (
            <>
              <QuizComponents
                _id={e._id}
                duration={e.duration}
                createdAt={e.createdAt.slice(0, 10)}
                name={e.name}
                totalQuestion={e.totalQuestion}
                totalScore={e.totalScore}
              />
            </>
          );
        })}
      z
    </>
  );
}

export default Profile;
