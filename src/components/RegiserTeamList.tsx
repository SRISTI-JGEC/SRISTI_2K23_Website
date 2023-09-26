import Image from "next/image";

function RegisterTeamList() {
    const data = [
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
        {
            teamLeader: "Swadesh Pal",
            teamName: "abcd",
            phoneNumber: "9876543221",
        },
    ];
    return (
      <div className="my-8 z-10 min-h-screen text-white sm:px-5 ">
        <div className=" flex justify-center items-center flex-col mb-6">
          <h1 className="capitalize text-3xl sm:text-4xl text-white  font-griffy">
            Registered Teams
          </h1>
          <Image
            src={
              "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
            }
            alt={"something"}
            width={400}
            height={300}
            draggable={false}
            className="max-sm:w-[15rem]"
          />
        </div>
        <div className="flex flex-col bg-[rgba(0,0,0,0.6)] backdrop-blur-sm sm:rounded-lg py-4">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b  dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-blue-600 ">
                        Sel. No
                      </th>
                      <th
                        scope="col"
                        className="px-2 sm:px-4 py-2 text-blue-600 sm:text-lg"
                      >
                        Team Leader
                      </th>
                      <th
                        scope="col"
                        className="px-2 sm:px-4 py-2 text-blue-600 sm:text-lg"
                      >
                        Teamname
                      </th>
                      <th
                        scope="col"
                        className="px-2 sm:px-4 py-2 text-blue-600 sm:text-lg"
                      >
                        Phone number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 ">
                          {idx + 1}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {item.teamLeader}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {item.teamName}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {item.phoneNumber}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterTeamList;
