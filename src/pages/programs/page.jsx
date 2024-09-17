import fitness from '../../assets/fitness.svg'
import yoga from '../../assets/yoga.svg'
import health from '../../assets/health.svg'
import cardio from '../../assets/cardio.svg'
import ChooseUs from './chooseus'
export default  function ProgramsPage() {
    const Programs = [
         {
            title : "Strenght Training",
            description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores nemo architecto sit exercitationem fuga aliquam neque nobis. Quod non explicabo aspernatur sit dolor veritatis doloremque sed reprehenderit saepe sapiente. ",
            img : fitness
         },
         {
            title:"Basic Yoga",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores nemo architecto sit exercitationem fuga aliquam neque nobis. Quod non explicabo aspernatur sit dolor veritatis doloremque sed reprehenderit saepe sapiente.",
            img : yoga
         },{
            title:"Health and Fitness",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores nemo architecto sit exercitationem fuga aliquam neque nobis. Quod non explicabo aspernatur sit dolor veritatis doloremque sed reprehenderit saepe sapiente.",
            img : health
         },{
            title:"Cardio Exercise",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores nemo architecto sit exercitationem fuga aliquam neque nobis. Quod non explicabo aspernatur sit dolor veritatis doloremque sed reprehenderit saepe sapiente.",
            img : cardio
         }
    ]
    return (
       <section className="text-center space-y-6 relative px-10"  >
                <h1 className="text-xl relative text-gray-400 uppercase">Our Programs</h1>
                <h1 className="text-3xl font-oswald">Build Your Best Body</h1>
                <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 ">
                        {
                            Programs.map((item , index)=>{
                                return(
                                    <div className="bg-blue-950 rounded-xl flex flex-col justify-center items-center gap-5 py-2 px-3  md:w-1/3" key={index}>
                                        <div className='rounded-full bg-white flex items-center justify-center py-2 px-2'>  <img src={item.img} alt={item.title} className="size-10 object-cover"/></div>
                                        <h1 className="text-xl font-semibold">{item.title}</h1>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                                        <button className='flex items-center gap-2'><span>Read more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                                            </svg>
                                                         </button>
                                    </div>
                                    
                       
                                )
                            })
                        }
                        
                </div>
                <ChooseUs/>
       </section>
    )
}