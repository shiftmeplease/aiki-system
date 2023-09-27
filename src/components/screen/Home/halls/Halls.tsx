import { IHalls, ICity, } from "@/interfaces/halls.interfaces";
import { FC } from "react";
import Map from "./Map";
import { useSidebarContext } from "@/components/layout/sideBarCtx";

const Halls: FC<IHalls> = ({ halls }) => {
  const { city } = useSidebarContext();
  if (!city) return null;
  let hallMap: ICity = halls.find((hall) => hall.city === city) || halls[0]
  
  return (
    <div>
      <Map hallMap={hallMap} />
    </div>
  );
};

export default Halls;
