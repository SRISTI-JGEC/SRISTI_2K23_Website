"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { leaderBoardType } from "@/app/assets/LeaderBoard";
import { leaderBoardList } from "@/app/assets/LeaderBoard";
import { useEffect, useState } from "react";
const LeaderBoard = () => {
  const { leaderboard } = useParams();
  const [list, setList] = useState<leaderBoardType>();
  const findLeaderBoard = () => {
    const data = leaderBoardList.find(
      (items) => items.category === leaderboard
    );
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    findLeaderBoard();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen  overflow-y-scroll bg-leaderboard_Image bg-no-repeat bg-cover">
        <div className="w-full max-w-[1400px] mx-auto h-full p-8 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white capitalize ps-4 mt-12 font-griffy">
              leader board
            </h1>
            <Image
              src="/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
              alt="underline"
              width={300}
              height={200}
              className="w-[30rem] max-sm:w-[20rem]"
            />
          </div>
          {list?.winners[0] ? (
            <div className="w-full h-auto flex flex-col justify-center items-center">
              <div className="w-[20rem] min-h-[10rem] mx-auto flex flex-col items-center">
                <Image
                  src="/Images/1st.png"
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover "
                />
                <div className="w-full min-h-24 rounded-lg bg-yellow-300 ">
                  <ul className="p-4">
                    <li className="text-xl font-semibold text-center mb-2">
                      <span className="capitalize">{list.winners[0]}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between max-lg:items-center w-full min-h-[18rem] px-8 max-lg:flex-col">
                <div className="relative w-[18rem] h-full  flex flex-col items-center max-sm:mt-4 ">
                  <Image
                    src="/Images/2nd.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-cover "
                  />
                  <div className="w-full min-h-24 rounded-lg bg-gray-300 ">
                    <ul className="p-4">
                      <li className="text-xl font-semibold text-center mb-2">
                        <span className="capitalize">{list.winners[1]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative w-[18rem] h-full max-sm:mt-4 flex flex-col items-center ">
                  <Image
                    src="/Images/3rd.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-cover "
                  />
                  <div className="w-full min-h-24 rounded-lg bg-[#E87A42] ">
                    <ul className="p-4">
                      <li className="text-xl font-semibold text-center mb-2">
                        <span className="capitalize">{list.winners[2]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[60vh] flex justify-center items-center">
              <h1 className="text-2xl sm:text-4xl text-white font-griffy font-semibold capitalize">
                stay tuned...........
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
