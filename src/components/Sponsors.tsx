import Image from "next/image"

const Sponsors = () => {
  return (
    <div style={{ backgroundImage: 'url(/Images/10.541378.jpg)', backgroundSize: 'cover'}} 
    className='h-screen text-white'>
        <div className="text-3xl md:text-5xl font-medium px-24 p-9">
            Our sponsors
            <Image
            src={'/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png'} 
            alt={'something'}
            width={300}
            height={300}
            className="h-5 md:h-8 mt-2"
            />
            <div className="flex flex-col md:flex-row justify-around">
                <Image
                src={'/Images/Untitled-2.png'} 
                alt={'something'}
                width={950}
                height={950}
                className=""
                />
                <Image
                src={'/Images/Untitled-2.png'} 
                alt={'something'}
                width={950}
                height={950}
                className=""
                />
            </div>
        </div>
    </div>
  )
}

export default Sponsors