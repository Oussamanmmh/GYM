import NavBar from './components/navBar/navBar';
import './index.css';
import Homepage from './pages/home/page';
import background from './assets/background.png';
import ProgramsPage from './pages/programs/page';
import daniel from './assets/daniel.jpg'
import OurTrainers from './pages/trainers';
import coach from './assets/coach.png'
import Prices from './pages/prices';
import vd from './assets/background.mp4'
import FooterSection from './components/footer';
import Timing from './pages/timing';
function App() {
  return (
    <div className=" relative  " style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat:"no-repeat" ,backgroundAttachment:"fixed" }}>
         <div className="absolute inset-0 bg-black opacity-80"></div>
       <nav className='sticky top-0 z-50 '>
          <NavBar/>
       </nav>
      

       
       
       
        <Homepage/>
      
      <div className='py-20 relative' style={{backgroundImage :`url(${daniel})` ,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:"no-repeat" ,backgroundAttachment:"fixed" }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
         <ProgramsPage/>
      </div>
      <div className='relative'  style={{backgroundImage :`url(${coach})` ,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:"no-repeat" ,backgroundAttachment:"fixed" }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
       <OurTrainers/>
      </div>  
      <div className="relative">
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          >
        <source src={vd} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
            <Timing/>
            <Prices />
          </div>
          
      <FooterSection/>
    </div>
  );
}

export default App;
