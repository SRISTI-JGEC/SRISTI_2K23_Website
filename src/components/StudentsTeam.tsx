import React from "react";
import Image from "../../node_modules/next/image";

const studentsDetails = [
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
  {
    name: "Loren Ipsum",
    designation: "Design Head",
    imgLink:
      "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
  },
];

function StudentsTeam() {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl lg:text-5xl pb-10">Students Team</h1>

      <div>
        <div className="flex max-w-7xl mx-auto justify-center items-center flex-wrap gap-x-20 pb-10 gap-y-4 px-10">
          {studentsDetails.map((details, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center justify-start w-48 h-72 gap-4 "
            >
              <div className="relative ">
                <Image
                  height={150}
                  width={150}
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full p-1 mx-auto  w-44 h-44 "
                />
              </div>
              <div>
                <p className="text-center font-bold">{details.name}</p>
                <p className="text-center">{details.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsTeam;
