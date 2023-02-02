import React from "react";
import Group from '../assets/Group.png'
import Simple from '../assets/Simple.png'
import Speak from '../assets/Speak.png'

const Why = ()=>{
    return(
        <section className="border-2">
            <div className="container mx-auto">
                <div className="text-center ">
                    <p className="uppercase">nggak harus sih Sebenarnya</p>
                    <p className="mt-8 text-3xl">Kenapa Harus Pakai Chat N Rechat?</p>
                    <p className="mt-8 text-gray-400">Sebenarnya yang bagus itu Whatsapp<br></br>
                        mending kalian pakai Whatsapp saja hehehehehe</p>
                </div>
                <div className="flex flex-row justify-between gap-x-[100px] mt-[100px]">
                    <div className="flex flex-col items-center justify-between">
                        <div>
                            <img src={Group} alt='' />
                        </div>
                        <div>
                            <p className="text-center mb-[5px]">Groups to keep in touch</p>
                            <p className="text-center text-gray-400">Keep in touch with the groups of people that matter the most, 
                                like your family or coworkers. 
                                With group chats, you can share messages, photos, and videos.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <div>
                            <img src={Simple} alt='' />
                        </div>
                        <div>
                            <p className="text-center mb-[5px]">Simple, Reliable Messaging</p>
                            <p className="text-center text-gray-400">Message your friends and family for free*. 
                                WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <div>
                            <img src={Speak} alt='' />
                        </div>
                        <div>
                            <p className="text-center mb-[5px]">Speak Freely</p>
                            <p className="text-center text-gray-400">With voice calls, you can talk to your friends and family for free*, even if they're in another country. 
                                And with free* video calls, you can have face-to-face conversations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why;