import { useQuery } from "../context/QueryContext";
import useFetchData from "../util/useFetchData";
import useSearchQuote from "../util/useSearchQuote";

export default function Card() {
    const {query} = useQuery()
    const { data: initialData, error: fetchError } = useFetchData();
    const { data: searchData, error: searchError } = useSearchQuote();
    
    const quotes = query ? searchData?.data?.quotes : initialData?.data?.quotes;
    if (!quotes) return <p>Loading...</p>;

    return (
        <>
            <div className="mx-auto font-[Poppins] lg:flex lg:flex-wrap lg:gap-6 justify-evenly">
                {quotes.map((quote, index) => (
                <div className="flex bg-sky-100 rounded-2xl shadow-lg shadow-sky-300 mb-6 overflow-hidden items-center p-6 gap-6 cursor-pointer hover:scale-110 transition-all duration-300 w-[100%] lg:w-[45%] xl:w-[30%]" key={index}>
                    <img src={quote.author.img} alt="" className="rounded-full w-25 h-25 aspect-square object-cover"/>
                    <div className="">
                        <p className="text-justify text-2xs font-[Oswald]">"{quote.quote}"</p>
                        <p className="font-bold ">{quote.author.name}</p>
                        <p className="font-semibold">{quote.author.birth_death}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}