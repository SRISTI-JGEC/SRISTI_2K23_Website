import React from "react";

const LeaderBoard = () => {
  return (
    <>
      <div className="w-full h-screen  overflow-y-scroll bg-leaderboard_Image bg-no-repeat bg-cover">
        <div className="w-full max-w-[1400px] mx-auto h-full p-8 pt-16">
          <div>
            <h1 className="text-4xl font-semibold text-white capitalize ps-4 mt-24">
              leaderboard
            </h1>
            <img
              src="Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
              alt="underline"
              className="w-[16rem]"
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-[20rem] h-[20rem] relative">
              <img
                src="Images/winner.png"
                alt=""
                className="w-full h-full object-cover z-20 absolute top-0 "
              />
              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png"
                alt=""
                className="w-[80%] h-[80%] z-0 object-contain rounded-full mx-auto"
              />
              <div className="w-full min-h-24 rounded-lg bg-yellow-300 mt-12">
                <ul className="p-4">
                  <li className="text-xl font-semibold text-center mb-2">
                    Team <span className="capitalize">geronimo</span>
                  </li>
                  <li className="text-sm font-[500] capitalize ps-4">
                    <span className="pe-3">1)</span>swadesh pal
                  </li>
                  <li className="text-sm font-[500] capitalize ps-4">
                    <span className="pe-3">2)</span>swadesh pal
                  </li>
                  <li className="text-sm font-[500] capitalize ps-4">
                    <span className="pe-3">3)</span>swadesh pal
                  </li>
                  <li className="text-sm font-[500] capitalize ps-4">
                    <span className="pe-3">4)</span>swadesh pal
                  </li>
                  <li className="text-sm font-[500] capitalize ps-4">
                    <span className="pe-3">5)</span>swadesh pal
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between max-lg:items-center w-full h-[18rem] px-8 max-lg:flex-col">
              <div className="relative w-[18rem] h-full max-lg:mt-[10rem] ">
                <img
                  src="Images/winner.png"
                  alt=""
                  className="w-full h-full object-cover z-20 absolute top-0 "
                />
                <img
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png"
                  alt=""
                  className="w-[80%] h-[80%] z-0 object-contain rounded-full mx-auto"
                />
                <div className="w-full min-h-24 rounded-lg bg-yellow-300 mt-12">
                  <ul className="p-4">
                    <li className="text-xl font-semibold text-center mb-2">
                      Team <span className="capitalize">geronimo</span>
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">1)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">2)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">3)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">4)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">5)</span>swadesh pal
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative w-[18rem] h-full max-lg:mt-[10rem] ">
                <img
                  src="Images/winner.png"
                  alt=""
                  className="w-full h-full object-cover z-20 absolute top-0 "
                />
                <img
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png"
                  alt=""
                  className="w-[80%] h-[80%] z-0 object-contain rounded-full mx-auto"
                />
                <div className="w-full min-h-24 rounded-lg bg-yellow-300 mt-12">
                  <ul className="p-4">
                    <li className="text-xl font-semibold text-center mb-2">
                      Team <span className="capitalize">geronimo</span>
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">1)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">2)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">3)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">4)</span>swadesh pal
                    </li>
                    <li className="text-sm font-[500] capitalize ps-4">
                      <span className="pe-3">5)</span>swadesh pal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full max-w-[1400px] mx-auto h-full p-8  mt-[15rem]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-semibold text-white capitalize ps-4">
                Comments
              </h1>
              <img
                src="Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
                alt="underline"
                className="w-[16rem]"
              />
            </div>
            <div className="w-[10rem]  h-12 rounded-lg bg-gray-800/60 flex justify-center items-center text-white text-lg font-semibold cursor-pointer">
              say congrats
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LeaderBoard;
