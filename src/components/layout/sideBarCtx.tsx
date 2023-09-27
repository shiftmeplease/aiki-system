import { createContext, useContext, useState, FC, PropsWithChildren, ReactNode } from "react";
import { IContext } from "@/interfaces/context.interfaces";


export const SidebarContext = createContext<IContext>({})

const cities = ['Санкт-Петербург', "Пермь", "Ижевск", "Каменка",];

export const SidebarContextProvider: FC<PropsWithChildren> = ({ children }) => {


    const [city, setCity] = useState(cities[0]);
    // const savedCity = getSavedCity()
    // if (savedCity) setCity(savedCity)

    return (
        <SidebarContext.Provider value={{ city, setCity }}>
            {children}
        </SidebarContext.Provider>
    )
};

// function getSavedCity() {
//     const savedCity =
//         typeof localStorage !== "undefined" ? localStorage.getItem("city") : null;
//     return savedCity
// }

export const useSidebarContext = () => useContext(SidebarContext)