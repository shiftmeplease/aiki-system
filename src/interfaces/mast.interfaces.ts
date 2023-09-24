export interface IMaster {
    id: number,
    name: string,
    city: string,
    belt: string,
    src: string
}

export interface IMasterData {
    masters: IMaster[]
}

export interface IMasterSingle {
    master: IMaster
}