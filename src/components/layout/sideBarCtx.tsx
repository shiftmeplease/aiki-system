import { createContext, useContext, useState, FC, PropsWithChildren, useEffect } from "react";
import { IContext } from "@/interfaces/context.interfaces";


export const SidebarContext = createContext<IContext>({})

const cities = ['Санкт-Петербург', "Пермь", "Ижевск", "Каменка",];

export const SidebarContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [city, setCity] = useState(cities[0]);

    useEffect(() => {
        const storedCity = localStorage.getItem('city');
        if (storedCity) {
            setCity(storedCity);
        }
    }, []);

    return (
        <SidebarContext.Provider value={{ city, setCity }}>
            {children}
        </SidebarContext.Provider>
    )
};


export const useSidebarContext = () => useContext(SidebarContext)