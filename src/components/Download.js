import React from "react";
import Chat4 from '../assets/chat4.png'
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'

const Download = ()=>{
    return(
        <section>
            <div className="container mx-auto bg-primary rounded-lg pl-[80px] pr-[80px] flex flex-row gap-x-10">
                <div className="basis-1/2 mt-[100px] text-white">
                   <p className="mb-[15px]">DOWNLOAD APLIKASINYA</p>
                   <h1 className="text-[28px] mb-[15px]">Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store</h1>
                    <li>Android Version: Mojave+</li>
                    <li>iOS Version: Lolipop+</li>
                    <li>Symbian: 20.04+</li>
                    <div className="flex flex-row mt-[35px] gap-x-[10px]">
                        <img src={Apple} alt='' />
                        <img src={Google} alt='' />
                    </div>
                </div>
                <div className="basis-1/2 flex justify-center">
                    <img src={Chat4} alt='' />
                </div>
            </div>
        </section>
    )
}

export default Download;