import React from "react";
import Techno from '../assets/Tech.png'
import Kamu from '../assets/kamu.png'
import Males from '../assets/males.png'
import Pokoknya from '../assets/pokoknya.png'

const Tech = ()=>{
    return(
        <section>
            <div className="container mx-auto flex flex-row">
                <div className="flex-1">
                    <img src={Techno} alt='' />
                </div>
                <div className="flex-1">
                    <div>
                        <p className="text-[18px]">TEKNOLOGI YANG DIGUNAKAN</p>
                        <p className="mt-[15px] text-[28px]">Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun!</p>
                        <p className="mt-[10px] text-gray-400">Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, 
                            gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. 
                            Inilah alasan kenapa gak usah daftar:
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <div className="flex flex-row gap-x-8">
                            <div className="w-[128px]">
                                <img src={Kamu} alt='' />
                            </div>
                            <div>
                                <h1 className="text-[18px]">Kamu Adalah Beban Kami</h1>
                                <p className="text-gray-400">Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-8 mt-[40px]">
                            <div className="w-[128px]">
                                <img src={Males} alt='' />
                            </div>
                            <div>
                                <h1 className="text-[18px]">Males Buat Ngembangin</h1>
                                <p className="text-gray-400">Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-8 mt-[40px]">
                            <div className="w-[110px]">
                                <img src={Pokoknya} alt='' />
                            </div>
                            <div>
                                <h1 className="text-[18px]">Pokoknya Males Aja Lah</h1>
                                <p className="text-gray-400">Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tech;