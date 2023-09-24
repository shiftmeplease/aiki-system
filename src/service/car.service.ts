import { IProg } from "@/interfaces/prog.interface"
import { IMaster } from "@/interfaces/mast.interfaces"
import { ICity } from "@/interfaces/halls.interfaces"
import { IText } from "@/interfaces/history.interfaces"
import { IStudent } from "@/interfaces/students.interface"
import db from '../../db.json'

export const Service = (() => {
    return {
         getProgramm():IProg[] {
            return db.programm
        },

         getMasters():IMaster[] {
            return db.masters
        },

         getHalls():ICity[] {
            return db.halls
        },

         getHistory():IText[] {
            return db.history
        },
         getStudents():IStudent[]{
            return db.students
        },
        
        //async getById(id: string) {
        //    const { data } = await axios.get<ICity[]>('/cars', {
        //        params: {
        //            id
        //        }
        //    })
        //    return data[0]
        //}
    }
})()