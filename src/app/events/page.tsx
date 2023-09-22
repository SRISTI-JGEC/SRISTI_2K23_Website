import Sponsors from '@/components/Sponsors'
import EventCard from '@/components/events-page/EventCard'
import Image from 'next/image'


const techeEvents = [
    {
        category: "Robotics",
        events: [ {name:"TECHZIBITION", link: "/events/hii"}, {name: "ROBO-SOCCER", link: "/events/"}, {name: "MAZE-MERIZE", link: "/events/"} ],
        image: "/Images/batch1.png",
        inverted: false

    },
    {
        category: "Civilised",
        events: [ {name:"BRIDGE-THE-GAP", link: "/events/"}, {name: "ROTOLARE", link: "/events/"} ],
        image: "/Images/batch1.png",
        inverted: true

    },
    {
        category: "Robotics",
        events: [ {name:"TECHZIBITION", link: "/events/"}, {name: "ROBO-SOCCER", link: "/events/"}, {name: "MAZE-MERIZE", link: "/events/"} ],
        image: "/Images/batch1.png",
        inverted: false

    },
    {
        category: "Civilised",
        events: [ {name:"BRIDGE-THE-GAP", link: "/events/"}, {name: "ROTOLARE", link: "/events/"} ],
        image: "/Images/batch1.png",
        inverted: true

    },
    {
        category: "Robotics",
        events: [ {name:"TECHZIBITION", link: "/events/"}, {name: "ROBO-SOCCER", link: "/events/"}, {name: "MAZE-MERIZE", link: "/events/"} ],
        image: "/Images/Batch2.png",
        inverted: false

    },
]

const page = () => {
  return (
    <>
        <Image
        height={1000}
        width={1000}
        src={'/Images/events-bg.jpg'} alt={'events-backround'}

        className='w-full h-screen object-cover fixed top-0 z-0'
        />
        <div className='relative text-white'>
            <div className='p-20 md:px-64 text-center w-fit text-6xl font-semibold'>
                <p>Events</p>
                <Image
                src={'/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png'} 
                alt={'something'}
                width={300}
                height={300}
                />
            </div>
            {
                techeEvents.map((event, index) => (
                    <EventCard key={index} props={event}/>
                ))
            }
        </div>
    </>
  )
}

export default page