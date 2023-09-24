type EventData= {
  id: number;
  category: String;
  rules: Array<String>;
  name: String;
  eventMembers: Array<{
    name: String;
    imgSrc: String;
    position: String;
    phone: String;
    dept: String;
    year: String;
    email: String;
  }>;
  videoSrc: String;
  venue: String;
  time: String;
  register: String;
  leaderboard: String;
  prizes: Array<number>;
}

export const EventList = [
  {
    id: 1,
    category: "mazemarize",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "mazemarize",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "auditoriam hall",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/mazemarize/register",
    leaderboard: "/events/mazemarize/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 2,
    category: "roboSoccer",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "robo Soccer",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "auditoriam hall",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/roboSoccer/register",
    leaderboard: "/events/roboSoccer/leaderboard",
    prizes: [8000, 5000, 3000],
  },
  {
    id: 3,
    category: "sputnik",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "sputnik",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "oval ground",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/sputnik/register",
    leaderboard: "/events/sputnik/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 4,
    category: "rotolare",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "rotolare",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "auditorium hall",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/rotolare/register",
    leaderboard: "/events/rotolare/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 5,
    category: "bridgeTheGap",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "bridge The Gap",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "auditorium hall",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/bridgeTheGap/register",
    leaderboard: "/events/bridgeTheGap/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 6,
    category: "codeChronicles",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "code Chronicles",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "DR1 Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/codeChronicles/register",
    leaderboard: "/events/codeChronicles/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 7,
    category: "cssBattle",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "css Battle",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "DR1 Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/cssBattle/register",
    leaderboard: "/events/cssBattle/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 8,
    category: "captureTheFlag",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "capture The Flag",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "DR1 Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/captureTheFlag/register",
    leaderboard: "/events/captureTheFlag/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 9,
    category: "sharkTankJolu",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "shark Tank Jolu",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "english lab Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/sharkTankJolu/register",
    leaderboard: "/events/sharkTankJolu/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 10,
    category: "jBuzz",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "j Buzz",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "english lab Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/jBuzz/register",
    leaderboard: "/events/jBuzz/leaderboard",
    prizes: [5000, 2000, 1000],
  },
  {
    id: 9,
    category: "sharkTankJolu",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffasdfhjklsdfsdafasddf",
      "dsfsdhjkfasdhfsdafhasdjkfasdhfasdhasdhjfdasfasdfdsfsdfsd",
      "dsfhasdhasdajsdjfasdkhfsdafhhfsdkjfhasdfadsfdsfd",
    ],
    name: "shark Tank Jolu",
    eventMembers: [
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event lead",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=16ewsRuD_8FxK9amOpru16QOeEcizbVer",
        position: "event member",
        phone: "8436893969",
        dept: "Information Technology",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
      },
    ],
    videoSrc: "/Video/video.mp4",
    venue: "english lab Room",
    time: "Oct 3, 2023 12:00:00",
    register: "/events/sharkTankJolu/register",
    leaderboard: "/events/sharkTankJolu/leaderboard",
    prizes: [5000, 2000, 1000],
  },
];
