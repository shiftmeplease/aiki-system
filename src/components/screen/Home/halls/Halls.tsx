import { IHalls, ICity, } from "@/interfaces/halls.interfaces";
import { FC, useContext } from "react";
import Map from "./Map";
import { SidebarContext } from "@/components/layout/Layout";

const Halls: FC<IHalls> = ({ halls }) => {
  const { city } = useContext(SidebarContext);
  if (!city) return null;
  let hallMap: ICity = halls.find((hall) => hall.city === city) || halls[0]
  
  return (
    <div>
      <Map hallMap={hallMap} />
    </div>
  );
};

export default Halls;
