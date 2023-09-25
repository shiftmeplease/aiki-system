import { IHalls, ICity, IMap } from "@/interfaces/halls.interfaces";
import { FC, useContext } from "react";
import styles from "./Halls.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Map from "./Map";
import { SidebarContext } from "@/components/layout/Layout";

const Halls: FC<IHalls> = ({ halls }) => {
  console.log(halls);
  const { city } = useContext(SidebarContext);
    console.log(city);
  if (!city) return null;
  const { asPath } = useRouter();
  let hallMap: ICity = halls.find((hall) => hall.city === city) || halls[0]
  console.log(hallMap, "hallMap");
  
  return (
    <div>
      <Map hallMap={hallMap} />
    </div>
  );
};

export default Halls;
