import React from "react";
import Arrow from '../assets/arrow-right-circle.png';
import Download from "../assets/download.png";
import User from "../assets/user.png";
import Chat1 from '../assets/chat1.png'
import Chat2 from '../assets/chat2.png'
import Chat3 from '../assets/chat3.png'

const Hero = ()=>{
    return(
        <div className="w-full mt-[80px]">
            <div className="container mx-auto flex flex-row gap-x-[100px] justify-between">
                <div className="flex-1">
                    <div className="mb-[30px]">
                        <p className="text-primary mb-[15px]">CHAT N RECHAT</p>
                        <h1 className="font-primary text-[34px] mb-[15px]">Sebuah aplikasi chatting yang<br/>
                            bisa bikin kamu lupa diri, tapi<br/>
                            tidak lupa jasa pahlawan!</h1>
                        <p className="font-ssp text-[18px] text-gray-500 mb-[15px]">Sebenarnya banyak banget aplikasi cahatting yang lebih bagus dari<br/>
                            ini, maka dari itu lebih baik pake yang lain aja deh ya daripada<br/>
                            pake aplikasi yang ini.</p>
                    </div>
                    <div className="flex flex-row gap-x-10 mb-[70px]">
                        <button className="border-2 rounded-lg bg-primary flex flex-row py-[15px] px-[45px] items-center gap-x-[15px]">
                            <a className="text-white">Register</a>
                            <img src={Arrow} alt='' />
                        </button>
                        <button className="border-1 text-primary rounded-lg bg-primary/5 py-[15px] px-[45px] items-center"><a>Learn More</a></button>
                    </div>
                    <div className="flex flex-row">
                        <div className=" flex flex-row w-[228px] gap-x-[34px] pr-[42px] border-r-4">
                            <div className="py-1">
                                <img src={Download} alt='' />  
                            </div>
                            <div>
                                <p className="text-gray-500">Total Download</p>
                                <p>1,200,333</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[228px] gap-x-[34px] pl-[42px]">
                            <div className="py-1">
                                <img src={User} alt='' />   
                            </div>
                            <div>
                                <p className='text-gray-500'>Total User</p>
                                <p>800,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex-auto justify-end relative pl-[52px]">
                    <div className="ml-[58px]">
                        <img src={Chat2} alt='' />
                    </div>
                    <div className="">
                        <img src={Chat3} alt='' />
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Hero;