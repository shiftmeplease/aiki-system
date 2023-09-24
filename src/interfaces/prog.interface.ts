export interface IProg {
    id: number
    name: string
    text: string
    src: string
}

export interface IProgName {
    name: string
    id: number
}

export interface IProgData {
    progs: IProg[]
}

export interface IProgSingle {
    prog: IProg
}