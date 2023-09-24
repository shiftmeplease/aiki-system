import { ICity } from "./halls.interfaces";
import { IMaster } from "./mast.interfaces";
import { IProg } from "./prog.interface";
import { IStudent } from "./students.interface";

export interface IData {
    masters: IMaster[]
    progs: IProg[]
    halls: ICity[]
    students: IStudent[]
}