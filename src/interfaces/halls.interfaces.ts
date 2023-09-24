export interface ITable {
    day: string
    time: string[]
}

export interface IAddress {
    name: string
    timetable: ITable[]
    id: number
    left: number
    top: number
    img: string
    coach: string
}


export interface ICity {
    id: number
    city: string
    src: string
    address: IAddress[]
}

export interface IHalls {
    halls: ICity[]
}

export interface IMap {
    hallMap: ICity
}
