import Image from "next/image";

Image;
function page() {
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
    <div className="pt-24 z-10 min-h-screen text-white px-5">
      <Image
        alt=""
        priority
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        src="/team-bg.jpg"
        draggable={false}
      />
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Registered Teams
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Team Leader
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Teamname
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap font-medium px-6 py-4">
                        {item.teamLeader}
                      </td>
                      <td className="whitespace-nowrap font-medium px-6 py-4">
                        {item.teamName}
                      </td>
                      <td className="whitespace-nowrap font-medium px-6 py-4">
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

export default page;
