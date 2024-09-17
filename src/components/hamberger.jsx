export default function HamburgerMenu({open , setOpen }) {
    
    const handleClick = () => {
       setOpen(!open)

    };
    return (
        <div className="cursor-pointer  duration-300 block md:hidden hamberger" onClick={handleClick}>
            <div className={`flex flex-col items-center justify-center ${open ? "gap-0 ":"gap-2"}`}>
                <div className={`h-1 w-10 bg-white transition-all duration-300 ease-in-out rounded-xl ${open ? "rotate-45 translate-y-[2.5px] w-11 translate-x-[5px]":"rotate-0" }`}></div>
                <div className={`h-1 w-6 bg-white rounded-xl ${open ? "hidden":"block"}` }></div>
                <div className={`h-1 w-10 bg-white  transition-all duration-300 ease-in-out rounded-xl ${open ? " -translate-y-[1px] w-11 translate-x-[5px] -rotate-45":"rotate-0" }`}></div>
            </div>

           
        </div>
    );
}