export default function Search() {
    return (
        <>
            <input type="text" className="w-[70%] h-10 p-2 text-white border-2 rounded-2xl" placeholder="Masukan kata kunci pencarian..."/>
            <button className="text-black bg-sky-100 py-2 px-14 rounded-3xl hover:bg-gray-600 cursor-pointer">Cari</button>
        </>
    )
}