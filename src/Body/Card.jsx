import React, { useEffect } from "react";
import { useQuery } from "../context/QueryContext";
import useFetchData from "../util/useFetchData";
import useSearchQuote from "../util/useSearchQuote";
import LoadingScreen from "../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { query } = useQuery();
    const { data: initialData, error: fetchError, loading: initialLoading } = useFetchData();
    const { data: searchData, error: searchError, loading: searchLoading } = useSearchQuote();

    const quotes = query ? searchData?.data?.quotes ?? [] : initialData?.data?.quotes ?? [];

    if (initialLoading || searchLoading) {
        return (
            <LoadingScreen />
        );
    }

    if (fetchError || searchError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-red-600">
                    Gagal mengambil data. Coba lagi nanti.
                </h1>
            </div>
        );
    }

    if (!quotes.length) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">Tidak ada data ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="mx-auto font-[Poppins] lg:flex lg:flex-wrap lg:gap-6 justify-evenly">
            {quotes.map((quote, index) => (
                <div
                    data-aos="zoom-in"
                    className="flex bg-sky-100 rounded-2xl shadow-lg shadow-sky-300 mb-6 overflow-hidden items-center p-6 gap-6 cursor-pointer hover:scale-110 transition-all duration-300 w-[100%] lg:w-[45%] xl:w-[30%]"
                    key={index}
                >
                    <img
                        src={quote?.author?.img || "https://via.placeholder.com/50"}
                        alt={quote?.author?.name || "Unknown"}
                        className="rounded-full w-16 h-16 object-cover"
                    />
                    <div>
                        <p className="text-justify text-xs font-[Oswald]">
                            "{quote?.quote || 'Tidak ada kutipan'}"
                        </p>
                        <p className="font-bold">{quote?.author?.name || "Tidak diketahui"}</p>
                        <p className="font-semibold">{quote?.author?.birth_death || "-"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
