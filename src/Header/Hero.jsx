import HeroImage from "../assets/hero.jpg"
import Search from "./Search"

export default function Hero() {
    return (
        <>
            <div className="bg-[url(/img/hero.jpg)] w-full h-[100vh] bg-cover font-[Poppins]">
                <div className="backdrop-brightness-20 backdrop-saturate-200 h-full w-full flex gap-4 items-center justify-center flex-col px-2 sm:px-4 md:px-8 lg:px-16 xl: 32">
                        <h1 className="text-white text-4xl text-center">CARI QUOTES YANG BISA MEMOTIVASI DIRI ANDA</h1>
                        <p className="text-white text-center">"Semakin banyak kamu membaca, semakin banyak yang kamu tahu. Semakin banyak yang kau pelajari, semakin banyak tempat yang akan kau kunjungi." -Dr. Seuss</p>
                        <Search />
                </div>
            </div>
        </>
    )
}