import useFetchData from "../util/useFetchData"

export default function Card() {
    const {data, error} = useFetchData();
    if (!data) return <p>Loading...</p>;
    const quotes = data.data.quotes

    console.log(quotes)

    return (
        <>
            <div className="container mx-auto font-[Poppins]">
                {quotes.map((quote, index) => (
                <div className="flex bg-sky-100 rounded-2xl shadow-lg shadow-sky-300 mb-6 overflow-hidden items-center p-6 gap-6 cursor-pointer hover:scale-110 transition-all duration-300" key={index}>
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