"use client"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
interface EventCardProps {
    image: string,
    category: string,
    events: Array<{name: string, link: string}>,
    inverted: boolean
}

const EventCard = ({props}: {props: EventCardProps}) => {
  return (
    <div className={`w-full h-full overflow-hidden flex flex-col md:flex-row items-center my-3 ${props.inverted ? "md:flex-row-reverse" : ""}`}>
        <Image src={props.image} alt={"batch-image"} width={300} height={300}
        className={`object-cover relative z-10 ${ props.inverted ? "md:right-44" : "md:left-44"}`}/>
        <div className="md:w-full bg-black/30 hover:bg-black/40 transition-all duration-150 backdrop-blur-sm md:h-[16rem] rounded-md p-5 md:p-7 md:px-36">
            <p className="text-4xl text-center md:text-start font-semibold  ps-4">{props.category} :</p>
            <>
                {props.events.map((event, index) => (
                    <div key={index} className="flex my-4 md:mx-56 w-full md:w-2/3 justify-between items-center">
                        <p className="md:mr-20 text-xl md:text-2xl">{event.name}</p>
                        <p
                        className="group ml-5 relative inline-flex items-center justify-center px-6 md:px-10 py-2 md:py-2 overflow-hidden font-mono font-medium 
                        tracking-tighter text-white border border-white/75 rounded-lg group cursor-pointer">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                           <Link href={'/events/mesmarise'}><span className="relative group-hover:text-black transition-all duration-75">Learn more</span></Link> 
                        </p>
                    </div>
                ))}
            </>
        </div>
    </div>
  )
}

export default EventCard