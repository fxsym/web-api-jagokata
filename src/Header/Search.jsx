import { useEffect, useState } from "react";
import { useQuery } from "../context/QueryContext"

export default function Search() {
    const { setQuery } = useQuery()
    const [q, setQ] = useState()

    function handleChange(e) {
        setQ(e.target.value)
    }

    function handleClick() {
        setQuery(q)
    }

    return (
        <>
            <input type="text" className="w-[70%] h-10 p-2 text-white border-2 rounded-2xl" placeholder="Masukan kata kunci pencarian..." onChange={handleChange}/>
            <button className="text-black bg-sky-100 py-2 px-14 rounded-3xl hover:bg-sky-500 cursor-pointer" onClick={handleClick}>Cari</button>
        </>
    )
}