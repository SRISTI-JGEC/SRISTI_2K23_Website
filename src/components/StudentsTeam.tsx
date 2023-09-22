import React from "react";
import Image from "../../node_modules/next/image";

const studentsDetails = [
  {
    name: "Uttaran Kundu",
    designation: "Chief Coordinator ",
    imgLink:
      "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
  },
  {
    name: "Soham Chakraborty",
    designation: "Chief Coordinator ",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1NBPnwHXbQz1xfAa0U_9AFeZjTZxE-xiV",
  },
  {
    name: "Shakil Ahmed ",
    designation: "Event Management Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1PC6JGZp5H1eMGHByFvyWak99ElKPeNZY",
  },
  {
    name: "Soumyadip Maiti",
    designation: "Event Management Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1eZkHbywegasrNFfZA15LI3AparAiaBFS",
  },
  {
    name: "Aakanksha Mishra ",
    designation: "Event Management Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1G28b6TptxHuvG9-13BFHQtHqX9s2uxSY",
  },
  {
    name: "Purba Kundu ",
    designation: "Event Management Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1KPHrqhFJxmd5c7Lvuk5rGkDrpRGwAUqz",
  },
  {
    name: "Shreya Dandapat",
    designation: "Treasurer",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1lpieo-tBY5SAK0zgRfVsYc0-IKtYmSzh",
  },
  {
    name: "Anupam Sinha ",
    designation: "Treasurer",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1U8mVSyV-kQI6XEpOeQvWKF53hnQugxdT",
  },
  {
    name: "Soumyadip Manna",
    designation: "Treasurer",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1vDTEghnpz1PwtSmKP-jMpp8CVQyekhHE",
  },
  {
    name: "Abhgyan Prakash Singh",
    designation: "Treasurer",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1lpieo-tBY5SAK0zgRfVsYc0-IKtYmSzh",
  },
  {
    name: "Sumit Mazumdar ",
    designation: "Logistics Head ",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1v9WvPDeTEOR-uTXPy-_PopplvAaqHzNQ",
  },
  {
    name: "Joydev Karmakar",
    designation: "Logistics Head ",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1v9WvPDeTEOR-uTXPy-_PopplvAaqHzNQ",
  },
  {
    name: "Arkamitra Ghosh",
    designation: "Design Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1JudDkpqDz9LSFbA0G2awHeTCyfZmSCfl",
  },
  {
    name: "Swadesh Pal",
    designation: "Web Lead",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1SDP4-RQbVeshsQbxe4Uyii-VetTBLSZe",
  },
  {
    name: "Saptaparna Sen",
    designation: "Outreach Team",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1FVdXsIRqeLXE3RDf7v-IRrkoIiflsnKI",
  },
  {
    name: "Dhiraj Thakur ",
    designation: "Outreach Team",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1WQDqH4Kp-oi6XPM49o9gO59vao1j0Smr",
  },
  {
    name: "Apratim Banerjee",
    designation: "Outreach Team",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1KihIqWqM1mwz3uRRlC0e_KcUV8jGOYt9",
  },
  {
    name: "Parmita Saha",
    designation: "Social Media Head",
    imgLink:
      "https://drive.google.com/uc?export=view&id=1pqLF_60xyZ4NfQHOoFMgDj_3ECfcYwmg",
  },
];

function StudentsTeam() {
  return (
    <div className="w-full">
      <h1 className=" flex flex-col items-center text-2xl lg:text-4xl  text-[#ecebeb] py-4 pb-8">
        Students Team
        <Image
          alt=""
          height={200}
          width={200}
          className="w-36 lg:w-60"
          src={`/underline-wand.png`}
        />
      </h1>

      <div>
        <div className="flex max-w-[90rem] mx-auto justify-center items-center flex-wrap gap-x-5 sm:gap-x-20 pb-10 gap-y-4 lg:px-10">
          {studentsDetails.map((details, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center justify-start w-36 h-56 sm:w-44 sm:h-72 gap-4 "
            >
              <div className="relative ">
                <Image
                  height={150}
                  width={150}
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full p-1 mx-auto  h-32 w-32 sm:w-44 sm:h-44 object-cover"
                />
              </div>
              <div>
                <p className="text-center font-bold sm:text-lg">{details.name}</p>
                <p className="text-center max-sm:text-sm">
                  {details.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsTeam;
