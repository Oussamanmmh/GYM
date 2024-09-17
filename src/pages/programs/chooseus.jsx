import video from '../../assets/video.mp4'
export default  function ChooseUs (){
    return(
        <>
            <section className="text-center space-y-6 flex flex-col md:flex-row items-center justify-center gap-20">
                <video src={video}   autoPlay loop muted className="rounded-xl  w-96 h-60 object-cover hidden md:block"/>
                <div className=' space-y-10'>
                    <div className='flex flex-col items-center gap-2'>
                     <h1 className='text-lg text-purple-600'>Service</h1>
                     <h1 className='text-2xl font-bold font-oswald'>Why Choose Us</h1>
                     <video src={video}   autoPlay loop muted className="rounded-xl  w-96 h-60 object-cover block md:hidden"/>
                    </div>  
                     <p className='text-sm text-gray-400 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor minima, natus ds.
                     In dolor minima, natus ds In dolor minima, natus ds.
                     </p>
                     <ul className='space-y-4  flex flex-col items-start '>
                         <li className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9333ea " className="size-6 fill-purple-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg><span>Over 140 Expert coach</span></li>
                         <li className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9333ea " className="size-6 fill-purple-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg><span>Train Smarter and Faster Than Before</span></li>
                         <li className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9333ea " className="size-6 fill-purple-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg><span>1 Free Program For new Member</span></li>
                         <li className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9333ea " className="size-6 fill-purple-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg><span>Unlimited Club access</span></li>

                     </ul>
                     <button className='bg-purple-600 text-white py-2 px-4 rounded-lg '>Learn More</button>
                </div>
            </section>
        </>
    )
}