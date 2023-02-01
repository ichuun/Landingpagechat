import React from "react";
import Logo from '../assets/logo.png'

const Header = ()=>{
    return(
        <header className="w-full fixed py-[10px]">
            <div className="font-['Source Sans Pro'] container mx-auto flex flex-row justify-between items-center">
                <div>
                    <img src={Logo} alt=''/>
                </div>
                <nav className="">
                    <ul className="flex flex-row gap-x-14">
                        <li className="font-semibold"><a href="#" >Beranda</a></li>
                        <li><a href="#" >Fitur</a></li>
                        <li><a href="#" >Teknologi</a></li>
                        <li><a href="#" >FAQ</a></li>
                    </ul>        
                </nav>
                <div className="border-2 rounded-lg py-[10px] px-[25px] bg-primary text-white">Download</div>
            </div>
        </header>
    )
}

export default Header;