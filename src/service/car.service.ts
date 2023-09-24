import { IProg } from "@/interfaces/prog.interface"
import axios from "axios"
import { IMaster } from "@/interfaces/mast.interfaces"
import { ICity } from "@/interfaces/halls.interfaces"
import { IText } from "@/interfaces/history.interfaces"

const API_URL = 'http://localhost:4200'
axios.defaults.baseURL = API_URL

export const Service = {
    async getProgramm() {
        const { data } = await axios.get<IProg[]>('/programm')
        return data
    },

    async getMasters() {
        const { data } = await axios.get<IMaster[]>('/masters')
        return data
    },

    async getHalls() {
        const { data } = await axios.get<ICity[]>('/halls')
        return data
    },

    async getHistory() {
        const { data } = await axios.get<IText[]>('/history')
        return data
    }
    //async getById(id: string) {
    //    const { data } = await axios.get<ICity[]>('/cars', {
    //        params: {
    //            id
    //        }
    //    })
    //    return data[0]
    //}
}