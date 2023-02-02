import React from "react";
import Logo from '../assets/logo.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'

const Footer = ()=>{
    return(
        <section>
            <div className="container mx-auto p-[80px] bg-gray-100 flex flex-row gap-x-[100px]">
                <div className="flex-auto w-32">
                    <div className="flex flex-row gap-x-8 items-center">
                        <img src={Logo} alt='' />
                        <p className="font-semibold">Chat N Rechat</p>
                    </div>
                    <p className="mt-[15px] text-gray-400">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
                    <p className="mt-[15px] text-gray-500">COPYRIGHT 2022.</p>
                </div>
                <div className="flex-auto w-32 flex flex-row">
                    <div className="flex-auto w-32">
                        <h1 className="font-semibold mb-[15px]">Sitemap</h1>
                        <ul className="text-gray-400">
                            <li>Beranda</li>
                            <li>Fitur-Fitur</li>
                            <li>Teknologi</li>
                            <li>FAQ</li>
                            <li>Download</li>
                        </ul>
                    </div>
                    <div className="flex-auto w-32">
                        <h1 className="font-semibold mb-[15px]">Tetep Terhubung</h1>
                        <p className="mb-[15px] text-gray-400">Lihat kami pansos di sosial media berikut:</p>
                        <div className="flex flex-row">
                            <img src={Instagram} alt='' />
                            <img src={Facebook} alt='' />
                            <img src={Twitter} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;