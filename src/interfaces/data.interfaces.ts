import { ICity } from "./halls.interfaces";
import { IMaster } from "./mast.interfaces";
import { IProg } from "./prog.interface";

export interface IData {
    masters: IMaster[]
    progs: IProg[]
    halls: ICity[]
}