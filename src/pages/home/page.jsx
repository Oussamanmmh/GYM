import nike from '../../assets/nike.svg';
import adidas from '../../assets/adidas.svg';
import bulls from '../../assets/bulls.svg';
import redbull from '../../assets/redbull.svg';
import ahmed from '../../assets/ahmed.png';
import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import { motion } from 'framer-motion';
export default function Homepage(){
    const brands = [
        {
            name :"Nike",
            logo : nike
        },
        {
            name :"Adidas",
            logo : adidas
        },
        {
            name :"Bulls",
            logo : bulls
        },
        {
            name :"Redbull",
            logo : redbull
        }
    ]
    return(
        <>
            <section className={`flex flex-col items-center justify-center gap-44 px-20 py-10 relative mt-56 mb-56 md:mt-0 md:mb-0 min-h-screen bg-cover   `}>
                <div className='flex flex-col md:flex-row gap-20'>
                     <motion.div 
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                     className='flex items-center justify-center md:hidden '>
                             <h1 className='font-bold text-3xl font-oswald'>Hello Champ !</h1>
                             <img src={ahmed} alt="athlet" className=" object-contain  size-72  bottom-0  "/>
                     </motion.div>
                    <div className='flex flex-col gap-10 '>
                        <motion.h1 
                         initial={{ opacity: 0, y: -50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                        className=" font-oswald text-center title">Transform Your Fitness Into Shape</motion.h1>
                        <p className="text-gray-400 paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/*reviews */}
                        <div className='flex items-center backdrop-blur-xl rounded-xl px-5 py-3 '>
                              <div className='flex'>
                                    <img src={person1} alt="person1" className='size-16 object-cover border border-white  rounded-full'/>
                                    <img src={person2} alt="person2" className='size-16 object-cover border border-white  rounded-full -translate-x-3'/>
                                    <img src={person3} alt="person3" className='size-16 object-cover border border-white  rounded-full  -translate-x-6'/>
                              </div>
                              <motion.div
                               initial={{ opacity: 0, x: -50 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ duration: 0.7 }}>
                                     <h1>Our Happy Customer</h1>
                                       <p className='flex items-center gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                                                </span><span>4.5</span>    <span className='text-green-600'>(12.5K review)</span></p>
                              </motion.div>
                        </div>
                        
                        <motion.div 
                         initial={{ opacity: 0, y: -50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                        className='flex items-center justify-center gap-20'>
                              <div className='flex flex-col items-center  xl:text-xl '> 
                                    <span className='font-semibold'>150 +</span>
                                    <span className='text-gray-400'>EXPERT COACHS</span>
                              </div>
                              <div className='flex flex-col items-center xl:text-xl'> 
                                    <span className='font-semibold'>100 +</span>
                                    <span className='text-gray-400 uppercase'>fitness programs</span>
                              </div>
                              <div className='flex flex-col items-center xl:text-xl'> 
                                    <span className='font-semibold'>1000 +</span>
                                    <span className='text-gray-400 uppercase'>Members joined</span>
                              </div>
                             
                               
                        </motion.div>
                        <div className='flex justify-center'>
                                  <input type='text' placeholder='your-email@gmail.com' className='outline-none rounded-tl-lg rounded-bl-lg py-2 text-black px-3 w-1/2'/>
                                  <button className=' bg-purple-700 py-2 px-3 text-white font-semibold rounded-tr-lg rounded-br-lg'>Join Now</button>
                         </div>
                         
                        
                         
                    </div>
                    <motion.div 
                         initial={{ opacity: 0, x: 50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5 }}
                    className='w-1/2 md:flex justify-center items-center hidden '>
                            <div className="bg-purple-700 rounded-full size-52 lg:size-64 relative ">
                                    <img src={ahmed} alt="athlet" className=" object-contain size-72 lg:size-96 absolute bottom-0 "/>

                            </div>
                    </motion.div>
                    </div>
                    <div className=''>
                    <h1 className='text-xl font-oswald text-gray-400 text-end mb-2'>Trusted By World Gym Brands</h1>
                         <div className='flex flex-wrap items-center gap-20  justify-center'> 
                            {
                                brands.map((brand, index) => (
                                    <div key={index} className='flex items-center  px-3 py-2 bg-blue-950 rounded-xl backdrop-blur-lg'>
                                        <img src={brand.logo} alt={brand.name} className='size-20'/>
                                        <span className='font-semibold font-oswald text-xl'>{brand.name}</span>
                                    </div>
                                ))
                            }
                             
                         </div>
                    </div>
            </section>
        </>
    )
}