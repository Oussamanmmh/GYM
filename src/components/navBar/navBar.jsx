import MenuHamber from '../hamberger';
import logo from '../icons/logo.svg';
import { useState  } from 'react';
import SideBar from './sidebar';
export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="  flex items-center justify-between px-10 py-6 h-20  z-50 bg-transparent w-full">
            <a className="text-2xl xl:text-4xl font-bold font-oswald flex items-center gap-2" href='/'>
                <img src={logo} alt="logo" className="h-10 w-10 inline-block xl:size-16 " />
                <span>Body</span>

            </a>
            <ul className="md:flex items-center gap-20 navlist xl:text-xl hidden">
                <li className='text-purple-700'><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <button className="rounded-lg bg-purple-700 py-2 px-3 text-center font-semibold xl:text-2xl md:block hidden">
                Join now
            </button>
            <MenuHamber open={open} setOpen={setOpen}  />
           
            <SideBar open={open} setOpen={setOpen} />
        </nav>
    );
}