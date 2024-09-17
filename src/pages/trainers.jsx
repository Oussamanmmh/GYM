import coach1 from '../assets/1.png'
import coach2 from '../assets/2.png'
import coach3 from '../assets/3.png'
import coach4 from '../assets/4.png'
import FacebookIcon from '../components/icons/facebook'
import InstagramIcon from '../components/icons/insta'
import Youtube from '../components/icons/youtube'
export default function OurTrainers(){
    const trainers = [
        {
            name : "John Doe",
            img : coach1
        },
        {
            name : "Jane Doe",
            img : coach2
        },
        {
            name : "Alex Doe",
            img : coach3
        },
        {
            name : "Sara Doe",
            img : coach4
        }
    ]
    return(
        <>
            <section className="text-center space-y-6 px-20 py-20 relative">
               <div>
               <h1 className='font-oswald font-bold text-2xl'>Our Coaches</h1>
               <p className='text-gray-400'>Meet our professional coaches who are dedicated to helping you achieve your fitness goals.</p>
               </div>
              <div className="flex flex-wrap items-center justify-center gap-10">
                 
                    {
                        trainers.map((trainer , index)=>{
                            return(
                          <div className='relative w-52 h-72 cursor-pointer coach ' key={index}>
                                    <div className='absolute inset-0 bg-purple-700 opacity-0  items-center justify-evenly rounded-xl coachmedia flex'>
                                        <div className='p-2 bg-white rounded-full'> <FacebookIcon /> </div>
                                        <div className='p-2 bg-white rounded-full'> <InstagramIcon fill={'black'}  size={24} /> </div>
                                        <div className='p-2 bg-white rounded-full'> <Youtube/> </div>
                                    </div>
                                    <img src={trainer.img} alt={trainer.name} className="rounded-xl w-52 h-72 object-cover mx-auto"/>
                            </div>
                            )
                        })
                    }
                </div>
                 
            </section>
        </>
    )
}