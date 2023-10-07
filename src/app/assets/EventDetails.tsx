import { EventData } from "../events/[eventname]/page";

export const EventList: EventData[] = [
  {
    id: 1,
    category: "mazemarize",
    rules: [
      "Only one Autonomous Bot per team is allowed. When the Autonomous Bot starts, no team member is allowed to touch the bot.",
      "At the start of the task, the Bot will be placed at the Starting Point. Only 1 team member is allowed to be near the game field while starting the bot. Actual Run will start only when Organisers give the signal..",
      "The Starting Procedure of the Bot should be simple and should not involve giving the bot any manual force or impulse in any direction. Participants are not allowed to keep anything inside the arena other than the bot.",
      "If the robot stops During the match, then Organizers only allow one restart in a single round.",
      "The time measured by the organisers will be final and will be used for scoring the teams. Time measured by any contestant by any other means is not acceptable for scoring.",
      "The time measured by the organisers will be final and will be used for scoring the teams. Time measured by any contestant by any other means is not acceptable for scoring.",
      "In case of any disputes/discrepancies, the organisers’ decision will be final and binding",
      "The organisers reserve the right to change any or all of the above rules as they deem fit.",
      "Change in rules, if any will be highlighted on the website and notified to the registered teams. The contestant must not alter the bot in any manner. The organisers reserve the right to arbitrate in such circumstances.",
    ],
    name: "mazemarize",
    eventCoordinators: [
      {
        name: "Rajat Nandi",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=12Lo2MgxKilOd5T_q8RIcG5oXVXI6ui0B",
        position: "event lead",
        phone: "8900352943",
        dept: "ECE",
        year: "3rd",
        email: "rn25252@ece.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Swagata Khuntia",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1EO_VCTK_ptV1L89Akys2qSmsv5coos6I",
        position: "event coordinator",
        phone: "9907144797",
        dept: "ECE",
        year: "3rd",
        email: "swagatakhuntia2003@gmail.com",
        isReverse: true,
      },
      {
        name: "Dip Roy ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1lFesSzXCwwQfqOkyal2WqKRmeqEdOmlP",
        position: "event coordinator",
        phone: "9749021886",
        dept: "ECE",
        year: "3rd",
        email: "dipp713146@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/maze.jpg",
    venue: "Auditorium hall",
    prelimsDate: "6th oct, 12PM",
    time: "Oct 7, 2023 18:00:00",
    pptLink:
      "https://drive.google.com/file/d/1b-xxfkL9Yk8zabG41OkqxTf-y7sAZfux/view?usp=sharing",
    register: "https://forms.gle/ZeFanpXv4ZhBaVgf8",
    leaderboard: "/events/mazemarize/mazemarize",
    prizes: [3500, 2250, 1250],
  },
  {
    id: 2,
    category: "roboSoccer",
    rules: [
      "Only one Bot per team is allowed.",
      "Game will start only when Referee give the signal..",
      "Match will be 1v1 (1 team vs 1 team).",
      "Opponents will be chosen Randomly.",
      "The Game will be of 5 minutes.",
      "In case of any disputes/discrepancies, the Referee’s decision will be final and binding.",
      "The organisers reserve the right to change any or all of the above rules as they deem fit.",
      "Change in rules, if any will be highlighted on the website and notified to the registered teams. The contestant must not alter the bot in any manner. The organisers reserve the right to arbitrate in such circumstances.",
      "Other game rules will be disclosed at the Event Day (Surprise!) (Don’t worry, rules will be Normal and Basic). ",
    ],
    name: "robo Soccer",
    eventCoordinators: [
      {
        name: "Asanka Maiti",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1a7tWeLx9SqCyOsVr6k1OoiliozJp0zaC",
        position: "event lead",
        phone: "7797307847",
        dept: "ECE",
        year: "3rd",
        email: "asankamaiti111@gmail.com",
        isReverse: false,
      },
      {
        name: "Amit Maiti ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1MTu3In2RGMc24Xxban7gdcS8TqvGYRt-",
        position: "event coordinator",
        phone: "9749427693",
        dept: "ECE",
        year: "3rd",
        email: "amitmaiti2003@gmail.com",
        isReverse: true,
      },
      {
        name: "Sayak Nath ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1TFmWJhRg5o6epqcEDNX88ZsBbNw17oqu",
        position: "event coordinator",
        phone: "9433797630",
        dept: "IT",
        year: "3rd",
        email: "sn2532@it.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "https://www.technoxian.com/wp-content/uploads/2020/06/robosoccer.png",
    venue: "auditorium hall",
    prelimsDate: "",
    time: "Oct 8, 2023 17:00:00",
    pptLink:
      "https://drive.google.com/file/d/192YqtoNW_N1_MhE7VSd7AyCJh-DTzlu2/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJBapHllqv98muNTmzSWVsiTek_zr17g062W2H6Nu0mpFGpA/viewform",
    leaderboard: "/events/roboSoccer/roboSoccer",
    prizes: [3500, 2250, 1250],
  },
  {
    id: 3,
    category: "sputnik",
    rules: [
      "Maximum team size allowed is 5.",
      "No two teams must have any common member.",
      "If the team does not reach the venue within the stipulated time, the team will be disqualified",
      "If the team does not reach the venue within the stipulated time, the team will be disqualified",
      "The rocket body should be made only with plastic bottles of aerated soft drinks with a maximum capacity of 2.5 L and should be free of any fabrication failures or dents caused by heat exposure. More than one bottle can be used but the total volume must not exceed 2.5L",
      "The team must have their launcher. The launcher can be made with PVC pipes and the design of the launcher should be made in such a manner that you can change the launching angle as required.",
      "The water rocket must use only compressed atmospheric air as its source of energy. All teams must bring their cycle pumps, buckets and mugs. Water to be filled in the rockets will be provided.",
      "At most two trials will be given to each team",
      "Use of electronic components and chemical explosives are banned",
      "The point where the rocket hits the ground first will be taken as the point of landing and measurements will be taken considering this point",
      "Teams are advised to get more than one water rocket, in case of any damage to one. But the water rockets must be identical.",
      "The participants are allowed to use variations (i.e. cardboard fins and rocket cones) of their water rockets in different rounds. However, only one design must be maintained throughout a single round.",
      "The team will be disqualified/given another chance to remodel if the model is found to be dangerous in any way. The decision of the organizers is final and binding..",
    ],
    name: "sputnik",
    eventCoordinators: [
      {
        name: "Taibu ray ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1h7U9nBgi9bilbKCgg1S4kvFX3fx9IOAS",
        position: "event lead",
        phone: "9883482136",
        dept: "ME",
        year: "3rd",
        email: "taiburay27@gmail.com",
        isReverse: false,
      },
      {
        name: "Soumen mallick",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1YkBszyMYJhCEKLkgF40rF18yOE-wdj-M",
        position: "event coordinator",
        phone: "7478552309",
        dept: "ECE",
        year: "3rd",
        email: "sonaimallick765@gmail.com",
        isReverse: true,
      },
      {
        name: "swadesh pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1JN15i8jpm5wvoz-dbGP4tUcyFNnVQusr",
        position: "event coordinator",
        phone: "8436893969",
        dept: "IT",
        year: "3rd",
        email: "swadeshpal129@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/8.png",
    venue: "oval ground",
    prelimsDate: "6th Oct, 10PM - 12PM",
    time: "Oct 7, 2023 9:00:00",
    pptLink:
      "https://drive.google.com/file/d/1DEnBvZuRzEzKAa4OaBaIm_gc9bN478OO/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfgX1ZRIRc2So39RrmN9l4jjLRZ4qlgkQII3YFnDkMfG_B3BA/viewform",
    leaderboard: "/events/sputnik/sputnik",
    prizes: [2000, 1500, 1000],
  },
  {
    id: 4,
    category: "rotolare",
    rules: [
      "Size restrictions - the height (starting position) should not be more than 2 meters.",
      "The model should be designed for a regular size glass marble.",
      " A ball must be provided by the team so that it can be tested on judging day.",
      " The starting position at the top of the first hill should be clearly marked.",
      " Magnets, electricity, springs and other forms of energy must not be used",
      " Make your coaster stand up on its own ",
      " Minimum 1 curve, 1 funnel and 1 loop must be attached with the Coaster",
    ],
    name: "rotolare",
    eventCoordinators: [
      {
        name: "Om Kumar Sah",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1Kj_P1PXqUQ_cE0r5LfEh9k-axXICYVVx",
        position: "event lead",
        phone: "6290889507",
        dept: "CE",
        year: "3rd",
        email: "ok2508@ce.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Aditi Pal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1VtYK_5WGuhfLC_W4_NrtZ7xGZ0yicEbX",
        position: "event coordinator",
        phone: "8902797178",
        dept: "CE",
        year: "3rd",
        email: "ap2530@ce.jgec.ac.in",
        isReverse: true,
      },
      {
        name: "Malay Poulik ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1AdNy96trAS7Aqe2anTo0REm9kh_nVsPh",
        position: "event coordinator",
        phone: "7679185576",
        dept: "CE",
        year: "3rd",
        email: "malaypoulik252@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/1.png",
    venue: "auditorium hall",
    prelimsDate: "",
    time: "Oct 5, 2023 19:00:00",
    pptLink:
      "https://drive.google.com/file/d/1iEDh3BiDPzbizGnIvBBzAeZarxPzW4WY/view?usp=sharing",
    register: "https://forms.gle/WirGziPnbCGd6bWLA",
    leaderboard: "/events/rotolare/rotolare",
    prizes: [3500, 2250, 1250],
  },
  {
    id: 5,
    category: "bridgeTheGap",
    rules: [
      "Bridge should be with in the specific range of height and length , which will be specified before the event.",
      "The Bridge must have to be a suspension bridge .",
      "Winner will be decided on the basis of load carrying capacity of their bridge ",
      "Event is open to all",
      "Maximum team size is 5",
      "Participants can form teams from different branches/ college/ university/institute.",
      "No two teams must have any common member.",
      "The time limit for the completion is (will be declared soon) hours.",
      "The time limit for the completion is (will be declared soon) hours.",
      "The decision of the judges shall be final.",
    ],
    name: "bridge The Gap",
    eventCoordinators: [
      {
        name: "Akash Kumar layek ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1Sa_ZDdVE-HKqad6CuowC0mwsrcu95-Mn",
        position: "event lead",
        phone: "7797672846",
        dept: "CE",
        year: "3rd",
        email: "ak2563@ce.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Mahek Parvez",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1gVVVeDZtgMJYUATtR777VvJ5oHLsLqPo",
        position: "event coordinator",
        phone: "8597530118",
        dept: "CE",
        year: "3rd",
        email: "mp2555@ce.jgec.ac.in",
        isReverse: true,
      },
      {
        name: "Sourav Ganguly",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1iGxt9tkZnsDSpx02zdOipM-C7gokBCyB",
        position: "event coordinator",
        phone: "8918798847",
        dept: "CE",
        year: "3rd",
        email: "sg2525@ce.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "/Events/2.png",
    venue: "auditorium hall",
    prelimsDate: "",
    time: "Oct 6, 2023 20:00:00",
    pptLink:
      "https://drive.google.com/file/d/1UzfRqsqOrd8rTvgVWeVCHyjfs1BCio5X/view?usp=sharing",
    register: "https://forms.gle/Auv7pGExGwMQdQab6",
    leaderboard: "/events/bridgeTheGap/leaderboard",
    prizes: [1500, 1200, 1000],
  },
  {
    id: 6,
    category: "codeChronicles",
    rules: [
      "3 CP Questions  in prelims",
      "5 CP Questions in prelims",
      "Top 20%* will qualify for finals",
      "5 CP Questions in final round",
      "2 hours in final round",
    ],
    name: "code Chronicles",
    eventCoordinators: [
      {
        name: "Spandan Bhattacharya",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=15aT6ylFzNqcxcUk-lQpiW1xKG8In3r3U",
        position: "event lead",
        phone: "9330184706",
        dept: "CSE",
        year: "3rd",
        email: "spandanbhattacharya.sb@gmail.com",
        isReverse: false,
      },
      {
        name: "Animesh Bag ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1fGNdI48aOF9YBEhG1pWvYP7wxUvJ5laM",
        position: "event coordinator",
        phone: "6297733147",
        dept: "CSE",
        year: "3rd",
        email: "animeshbag606@gmail.com",
        isReverse: true,
      },
      {
        name: "Sucil dey",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1V8xqPfzkgAY2qPvapPUAL_BNJdXpWylx",
        position: "event coordinator",
        phone: "6289742484",
        dept: "IT",
        year: "3rd",
        email: "sucildey@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/3.png",
    venue: "DR1/DR2 Room",
    prelimsDate: "5th Oct, 5PM - 6PM",
    time: "Oct 7, 2023 18:00:00",
    pptLink:
      "https://drive.google.com/file/d/16LrO_FTY6tp8pOksdoLFEqQmVPLL34bg/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfiAtEh0SPzFReS1dqKsddrznC9Do3ZtKAxHQi2pu1Zz9mG0A/viewform",
    leaderboard: "/events/codeChronicles/codeChronicles",
    prizes: [2000, 1500, 1000],
  },
  {
    id: 7,
    category: "cssBattle",
    rules: [
      "all Āiven desiĀns will be in .pnĀ ÿormat (400x300).",
      "participants will have to recreate the desiĀns as accurately as they possibly can.",
      "participants can assume that their desiĀns will be run on 400x300 browser windows, ",
      "after they successÿully do so, they will need to minimize their html code to minimum possible characters.",
    ],
    name: "css Battle",
    eventCoordinators: [
      {
        name: "Pratyay Roy",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1I25TXcqk8mZEqy4mBmbqXNBzYDiI1MIz",
        position: "event lead",
        phone: "8583081725",
        dept: "IT",
        year: "3rd",
        email: "pratyayroy20@gmail.com",
        isReverse: false,
      },
      {
        name: "Siddharth Biswas",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=11fFWkKoLVXk6i-pw1r8mqAgd0aZXa9ur",
        position: "event coordinator",
        phone: "6291369741",
        dept: "IT",
        year: "3rd",
        email: "siddharth211102@gmail.com",
        isReverse: true,
      },
      {
        name: "Sayan Majumder ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1uTs_hA2VSL49LcgXWvPS1i4MBJI-HGHD",
        position: "event coordinator",
        phone: "9875699506",
        dept: "CSE",
        year: "3rd",
        email: "sayanmajumder0002@gmail.com",
        isReverse: false,
      },
    ],
    img: "https://camo.githubusercontent.com/4a7ae78825f0277553a1899f8c293480f07ee55d149cf350b3140a3cca3d5619/68747470733a2f2f63646e2d6d656469612d312e66726565636f646563616d702e6f72672f696d616765732f312a794467534a725650504837304a6468364b55796f6b412e706e67",
    venue: "DR1/DR2 Room",
    prelimsDate: "8th Oct, 5PM - 7PM",
    time: "Oct 8, 2023 19:00:00",
    pptLink:
      "https://drive.google.com/file/d/1alqwN_B3CbDelxhkqjGSQaABsYl79vvZ/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSeFCgBZ5D7ujVWQYiEYQ5Gei04fsW7uHzGTXXJg3qOrfFJ5vQ/viewform",
    leaderboard: "/events/cssBattle/cssBattle",
    prizes: [1000, 700, 500],
  },
  {
    id: 8,
    category: "captureTheFlag",
    rules: [
      "Sharing flag is forbidden",
      "Individual participation",
      "Time based contest (first submission ranks first)",
    ],
    name: "capture The Flag",
    eventCoordinators: [
      {
        name: "Pankaj Barman ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1C6gI1ToLCqCyfRqbL0xRqJBrOY8yNUCy",
        position: "event lead",
        phone: "8101480752",
        dept: "CSE",
        year: "3rd",
        email: "pb2538@cse.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Sandipan Chatterjee",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1FGimIoX-cl-pUjwsi_161qKZEFd2ot2t",
        position: "event coordinator",
        phone: "8258977597",
        dept: "CSE",
        year: "3rd",
        email: "sandipan3002@gmail.com",
        isReverse: true,
      },
      {
        name: "Abhigyan Prakash Singh",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1_rU-4rEW-IUrCrWF6ETXe81YLjnP5iGv",
        position: "event coordinator",
        phone: "6290626866",
        dept: "CSE",
        year: "3rd",
        email: "abhigyansingh56@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/ctf.jpeg",
    venue: "auditorium hall",
    prelimsDate: "",
    time: "Oct 8, 2023 12:00:00",
    pptLink:
      "https://drive.google.com/file/d/1qXRUwWrtW9Jf7awrhqHr26Hh0S_p9uUB/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSe4s50fbimk3oqOBTU1Gn9EIkYcEhEOOVvcdginjN6bk7gHfA/viewform",
    leaderboard: "/events/captureTheFlag/captureTheFlag",
    prizes: [1000, 700, 500],
  },
  {
    id: 9,
    category: "sharkTankJolu",
    rules: [
      "Present your groundbreaking business idea",
      "Network with industry leaders and investors",
      "A business plan is a written document that describes in detail how a business usually a startup or an organization that you're going to build defines its objective and how it is going to achieve its goal..",
    ],
    name: "shark Tank Jolu",
    eventCoordinators: [
      {
        name: "Adrita Mandal",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1jdy-f7Qw7TQj4BA945jEOzv2F8zFTARx",
        position: "event lead",
        phone: "9679953824",
        dept: "IT",
        year: "3rd",
        email: "mandaladrita8@gmail.com",
        isReverse: false,
      },
      {
        name: "Shreya Dandapat",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1lpieo-tBY5SAK0zgRfVsYc0-IKtYmSzh",
        position: "event coordinator",
        phone: "8847850725",
        dept: "ME",
        year: "3rd",
        email: "sd2564@me.jgec.ac.in",
        isReverse: true,
      },
      {
        name: "Debraat halder",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1GB1O03PDY6KgDSRuZnHsY6Cv2Ls7hFfe",
        position: "event coordinator",
        phone: "8967903389",
        dept: "CE",
        year: "3rd",
        email: "debraathalder69@gmail.com",
        isReverse: false,
      },
    ],
    img: "/Events/9.png",
    venue: "Auditorium hall",
    prelimsDate: "",
    time: "Oct 8, 2023 15:00:00",
    pptLink:
      "https://drive.google.com/file/d/1Wq2UowYc7md5R7VAH9Vc_chmlGS3X0XF/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/1DNZO4Ifvf5qkEZNg-qlOw_NT7NrtuduSNqHOWJUYDco/edit?chromeless=1",
    leaderboard: "/events/sharkTankJolu/sharkTankJolu",
    prizes: [5000, 3000, 2000],
  },

  {
    id: 10,
    category: "gmun",
    rules: [
      "English shall be the official working language of the conference. No representative may address the forum or submit a document in a language other than English.",
      "All delegates must show courtesy and respect to the Secretary General, chairpersons, committee staff, coordinators and fellow delegates. The chairperson will immediately call to order any delegate who fails to comply with this rule.",
      "Nearly all Model United Nations conferences require delegates to wear Western business attire, as dressing professionally is an important way to show respect for the nation, organization, other individual delegates, as well as for the rest of one's committee.",
      "In the first round, each delegates shall be given a fixed 3 minutes of time to explain their crisis, while the 2nd round will be primarily focused on resolution.",
    ],
    name: "G-Mun",
    eventCoordinators: [
      {
        name: "Aditi kumari",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1tVS3hZoghEDW1_d-irpgSDyI9gCKAbn6",
        position: "event lead",
        phone: "7407570466",
        dept: "IT",
        year: "3rd",
        email: "123aditi.kr@gmail.com",
        isReverse: false,
      },
      {
        name: "Rohini Afsana",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1OKlcVhCLJzDa0xgnvkdVom3r5t_ZNYIq",
        position: "event coordinator",
        phone: "7983216103",
        dept: "EE",
        year: "3rd",
        email: "ra2554@ee.jgec.ac.in",
        isReverse: true,
      },
      {
        name: "Sumit Mazumdar ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1v9WvPDeTEOR-uTXPy-_PopplvAaqHzNQ",
        position: "event coordinator",
        phone: "7739164949",
        dept: "CE",
        year: "3rd",
        email: "sm2512@ce.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "/Events/gmun.png",
    venue: "auditorium/ DR1",
    prelimsDate: "",
    time: "Oct 6, 2023 12:00:00",
    pptLink:
      "https://drive.google.com/file/d/1a6c-_Uvjwsii23KC4kdM3k5HsPiN8ATB/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/1YCtk4oJHtkuXr3U3wi5WXFtkoyWf6zyGUXNeDv56trs/viewform?edit_requested=true",
    leaderboard: "/events/gmun/gmun",
    prizes: [1000, 800, 800],
  },
  {
    id: 11,
    category: "intraRicerca",
    rules: [
      "Team size: maximum of 3",
      "Level 1: Abstract writing– Abstract should be taken strictly based on the template provided during workshop, 3 days will be provided for topic selection and abstract preparation .",
      "Level 2: presentation – A detailed and well researched presentation should be pitched on the selected topic, by the teams shortlisted for level1. 3 days will be provided for presentation preparation.",
      "There are no restrictions of department on team formation and topic selection",
    ],
    name: "intra ricerca",
    eventCoordinators: [
      {
        name: "Poulami Paul",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1oO_jLRUaQrHCrHIpWSKcZheemseGF86g",
        position: "event lead",
        phone: "8337887054",
        dept: "CSE",
        year: "3rd",
        email: "pp2528@cse.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Shreyashi Dasgupta",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1uRSJRf62sUYtYxIR4FV56WlaCZuwB6gW",
        position: "event coordinator",
        phone: "8327842765",
        dept: "EE",
        year: "3rd",
        email: "shreyashidasgupta.apdj@gmail.com",
        isReverse: true,
      },
      {
        name: "Shreyan Majumdar",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1cXOaYMYB5yEI16cuuIF5qW8zERFTrBhE",
        position: "event coordinator",
        phone: "7797152845",
        dept: "CSE",
        year: "3rd",
        email: "shreyanjalpaiguri@gmail.com",
        isReverse: false,
      },
    ],
    img: "https://jenfi.com/wp-content/uploads/2022/01/Blog_CaseStudy-1024x683-1.png",
    venue: "auditorium/ DR1",
    prelimsDate: "",
    time: "Oct 7, 2023 14:00:00",
    pptLink:
      "https://drive.google.com/file/d/1ZY2s4x8eYrxQvw1MpMfqgJXmNRuH9EkS/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSeOrWximulh3ROzrd06OFXeQomA-oH9nySY5GbgOdQLcshGUA/formrestricted",
    leaderboard: "/events/intraRicerca/intraRicerca",
    prizes: [4000, 2000, 1000],
  },
  {
    id: 12,
    category: "troubleshooter",
    rules: [""],
    name: "Troubleshooter",
    eventCoordinators: [
      {
        name: "Shreya Dandapat",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1lpieo-tBY5SAK0zgRfVsYc0-IKtYmSzh",
        position: "event lead",
        phone: "8847850725",
        dept: "ME",
        year: "3rd",
        email: "sd2564@me.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Riddhiman Tarafder ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1RsW0a4fwV0xTH--voF8tGEL_QwpVuWrs",
        position: "event coordinator",
        phone: "7384597900",
        dept: "ECE",
        year: "3rd",
        email: "rt2505@ece.jgec.ac.in",
        isReverse: true,
      },
      {
        name: "Jayasree Nath ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1M_1HmV65fVLGvEDk34bv3q1COhboP-3a",
        position: "event coordinator",
        phone: "7602645043",
        dept: "CE",
        year: "3rd",
        email: "jn2560@ce.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "/Events/6.png",
    venue: "auditorium hall",
    prelimsDate: "",
    time: "Oct 6, 2023 16:00:00",
    pptLink:
      "https://drive.google.com/file/d/1yarPtiTDRnHPw3a820DmAAApg8LkKwT8/view?usp=sharing",
    register: "https://forms.gle/7bnQ388trSJYE3eH6",
    leaderboard: "/events/troubleshooter/leaderboard",
    prizes: [1000, 800, 600],
  },
  {
    id: 13,
    category: "techzibition",
    rules: [
      "Maximum of 5 participants from each team.",
      "Innovation is vital for progress and development in society.",
      "Automobile, Agriculture, Pollution, Sustainable Energy, Defense and Security these are the topics",
    ],
    name: "techzibition",
    eventCoordinators: [
      {
        name: "Atri Sukul ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=18qDtLcFoUJzTtC__VEMv6HyKOO9p5Bwm",
        position: "event lead",
        phone: "8900519836",
        dept: "CSE",
        year: "3rd",
        email: "2025.cse11.atrisukul@gmail.com",
        isReverse: false,
      },
      {
        name: "Asanka Maiti",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1YhbJfZZLYTwjsEEW0SWnLRpExiPDZkyb",
        position: "event lead",
        phone: "7797307847",
        dept: "ECE",
        year: "3rd",
        email: "asankamaiti111@gmail.com",
        isReverse: true,
      },
      {
        name: "Bhumika Roy",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1yakG_CVXJ2vN8aZxopIB_M7wWsvugTOh",
        position: "event coordinator",
        phone: "7864008846",
        dept: "ECE",
        year: "3rd",
        email: "br2501@ece.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Soumyadip Maiti",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1eZkHbywegasrNFfZA15LI3AparAiaBFS",
        position: "event coordinator",
        phone: "8116008172",
        dept: "CE",
        year: "3rd",
        email: "sm2502@ce.jgec.ac.in",
        isReverse: true,
      },
    ],
    img: "https://msufp.in/2018/images2/techzi/gesture-control.jpg",
    venue: "Auditorium hall",
    prelimsDate: "",
    time: "Oct 7, 2023 12:00:00",
    pptLink:
      "https://drive.google.com/file/d/1GXF9JWx4syM9TNoc06fffgacuKwkP9D8/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSe7QvWTdGsjGIlNBu-RHBTYXjmWtkC2Pqxyy4-ba1CGmaA27A/viewform",
    leaderboard: "/events/techzibition/leaderboard",
    prizes: [10000, 8000, 6000],
  },
  {
    id: 15,
    category: "techQuiz",
    rules: [
      "Participants must have a basic understanding of chess rules and strategies to compete effective",
      "Registration for the 'Chess Master' tournament at Sristi Event 2023 is mandatory for all aspiring chess enthusiasts",
    ],
    name: "Tech Quiz",
    eventCoordinators: [
      {
        name: "Subham Kar",
        imgSrc:
          "https://drive.google.com/open?id=1Tcmv0qr8uecWh6SGLDDOEHLcap6hCLkh",
        position: "event lead",
        phone: "8670338017",
        dept: "CE",
        year: "3rd",
        email: "karsjpg7@gmail.com",
        isReverse: false,
      },
      {
        name: "Sandipan Chatterjee",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1FGimIoX-cl-pUjwsi_161qKZEFd2ot2t",
        position: "event coordinator",
        phone: "8258977597",
        dept: "CSE",
        year: "3rd",
        email: "sandipan3002@gmail.com",
        isReverse: true,
      },
      {
        name: "Ankit Sengupta ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1g6noRQsCAjy7a6qasvBzR3_j-S4nwCRB",
        position: "event coordinator",
        phone: "9679409501",
        dept: "ECE",
        year: "3rd",
        email: "as2509@ece.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "https://i.ytimg.com/vi/eBUWqcuu58c/maxresdefault.jpg",
    venue: "auditorium hall",
    prelimsDate: "6th Oct, 9AM - 10PM",
    time: "Oct 7, 2023 3:00:00",
    pptLink:
      "https://drive.google.com/file/d/1xYx1GBLbNNILyStQ4jvnkjZP9ERuhh9N/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfK2uSgZxBAIIRC5523IMffzQ5p9W6JnTenepNj-24wryH3gg/viewform?vc=0&c=0&w=1&flr=0",
    leaderboard: "/events/techQuiz/techQuiz",
    prizes: [1200, 900, 600],
  },
  {
    id: 16,
    category: "chess",
    rules: [
      "Participants must have a basic understanding of chess rules and strategies to compete effective",
      "Registration for the 'Chess Master' tournament at Sristi Event 2023 is mandatory for all aspiring chess enthusiasts",
    ],
    name: "Chess ",
    eventCoordinators: [
      {
        name: "Sayan Majumder ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1uTs_hA2VSL49LcgXWvPS1i4MBJI-HGHD",
        position: "event lead",
        phone: "9875699506",
        dept: "CSE",
        year: "3rd",
        email: "sayanmajumder0002@gmail.com",
        isReverse: false,
      },
      {
        name: "Abhigyan Prakash Singh",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1_rU-4rEW-IUrCrWF6ETXe81YLjnP5iGv",
        position: "event coordinator",
        phone: "6290626866",
        dept: "CSE",
        year: "3rd",
        email: "abhigyansingh56@gmail.com",
        isReverse: true,
      },
      {
        name: "Aishik Patra",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1dBRD3ZqFctLiDvMcldg11k1Jnr8xVj88",
        position: "event coordinator",
        phone: "7602989174",
        dept: "IT",
        year: "3rd",
        email: "ap2557@it.jgec.ac.in",
        isReverse: false,
      },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1-WioQmAIUTMWFT1m_pmROJ584539OTAeg&usqp=CAU",
    venue: "DR1 Room",
    prelimsDate: "6th Oct, 12PM - 1PM",
    time: "Oct 8, 2023 19:00:00",
    pptLink:
      "https://drive.google.com/file/d/17t4OZolTCwfANCE_34EI5wuJNZhI-Jls/view?usp=sharing",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLScCsKjKLlfAXTVjFDRsYXqZ1uDkGhJ_nVrLM6jKYmsTBJbbIA/closedform",
    leaderboard: "/events/chess/chess",
    prizes: [1000, 700, 500],
  },
  {
    id: 17,
    category: "mathemania",
    rules: [
      "Top participants on the leaderboard after prelims earn tickets to the finale",
      "Mathemania final will be held offline (time and venue details to be announced later).",
      "The number of finalists will be determined after the prelims.",
      "Final round will be of 3 questions.",
      "Offline mode, pen and paper will be provided to finalists.",
      "Any further add-ons may occur to decide the finalists or the winners.",
    ],
    name: "mathemania ",
    eventCoordinators: [
      {
        name: "Arnab Mukherjee",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1a2ihMtT4pt2OEE3XaXSsmpzHb0qjnML3",
        position: "event lead",
        phone: "7044621221",
        dept: "CSE",
        year: "3rd",
        email: "am2524@cse.jgec.ac.in",
        isReverse: false,
      },
      {
        name: "Animesh Bag ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1fGNdI48aOF9YBEhG1pWvYP7wxUvJ5laM",
        position: "event coordinator",
        phone: "6297733147",
        dept: "CSE",
        year: "3rd",
        email: "animeshbag606@gmail.com",
        isReverse: true,
      },
      {
        name: "Subhajit Ash",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1V53vBH8p5cDzSmDCKc5ITpqnHQwgSMIz",
        position: "event lead",
        phone: "6290939890",
        dept: "IT",
        year: "3rd",
        email: "amisubhajit74@gmail.com",
        isReverse: false,
      },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDSnc-iuvk-irrHgXTdSA1wpcLDdyqezMeg&usqp=CAU",
    venue: "Auditorium hall",
    prelimsDate: "On going",
    time: "Oct 7, 2023 9:00:00",
    pptLink:
      "https://drive.google.com/file/d/1gPP8G9yQPufk9glAKHyTA89qW3yePBzV/view?usp=sharing",
    register: "",
    leaderboard: "/events/mathemania/mathemania",
    prizes: [1000, 700, 500],
  },
  {
    id: 18,
    category: "codeHunt",
    rules: [
      "sdafsdfsdafasdflasdjkhfasdfhasdhjkflsadfhasdffas sdffasdfasdf dsafasdfasfasd afasdfsdafsda asdfasf",
      "dsfsdhjkfasdhfs sdafasf fasdfsdaf sdffasdfsd a sdffasdf  fddsaf ffds asdffasd",
      "dasfd sdfasdfds  sdfasdf  sdfafsdf asdffsdf  sdffads",
    ],
    name: "code Hunt ",
    eventCoordinators: [
      {
        name: "Abhigyan Prakash Singh",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1_rU-4rEW-IUrCrWF6ETXe81YLjnP5iGv",
        position: "event lead",
        phone: "6290626866",
        dept: "CSE",
        year: "3rd",
        email: "abhigyansingh56@gmail.com",
        isReverse: false,
      },
      {
        name: "Animesh Bag ",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=1fGNdI48aOF9YBEhG1pWvYP7wxUvJ5laM",
        position: "event coordinator",
        phone: "6297733147",
        dept: "CSE",
        year: "3rd",
        email: "animeshbag606@gmail.com",
        isReverse: true,
      },
      {
        name: "Spandan Bhattacharya",
        imgSrc:
          "https://drive.google.com/uc?export=view&id=15aT6ylFzNqcxcUk-lQpiW1xKG8In3r3U",
        position: "event coordinator",
        phone: "9330184706",
        dept: "CSE",
        year: "3rd",
        email: "spandanbhattacharya.sb@gmail.com",
        isReverse: false,
      },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTET5oftvoAbOHPp5DCtK9fAPSvqAGVHJ4qew&usqp=CAU",
    venue: "auditorium hall",
    prelimsDate: "5th Oct, 9.45PM - 10.30PM",
    time: "Oct 5, 2023 22:30:00",
    pptLink:
      "https://drive.google.com/file/d/1vd3NEa__WbQ9I5Vs0hbS8JgvtljdVsJN/view?usp=sharing",
    register: "https://forms.gle/wwNxA1pdGqiJsz1s9",
    leaderboard: "/events/codeHunt/codeHunt",
    prizes: [1500, 1200, 1000],
  },
];
