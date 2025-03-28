import {createContext, useContext, useState} from "react";

const QueryContext = createContext();

export function QueryContextProvider({children}) {
    const [query, setQuery] = useState("")
    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            {children}
        </QueryContext.Provider>
    );
}

export function useQuery() {
    return useContext(QueryContext);
}