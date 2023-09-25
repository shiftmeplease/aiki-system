import { createContext, FC, PropsWithChildren, useState } from "react";
import Header from "./header/Header";
import Meta from "@/components/seo/Meta";
import { IMeta } from "@/components/seo/meta.interface";
import Footer from "./footer/Footer";
import { IContext } from "@/interfaces/context.interfaces";


const cities = ['Санкт-Петербург', "Пермь", "Ижевск", "Каменка",];


const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
    const [city, setCity] = useState(cities[0]);
  return (
    <Meta title={title} description={description}>
      <SidebarContext.Provider value={{ city, setCity }}>
        <Header />
        <main>
          {children}
          <div id="modal-portal" />
        </main>
        <Footer />
      </SidebarContext.Provider>
    </Meta>
  );
};
export const SidebarContext = createContext<IContext>({});
export default Layout;
