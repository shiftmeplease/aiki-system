export interface IHistory {
    history: IText[]
}

export interface IHistorySingle {
    history: IText
}

export interface IText {
    text: string
    id: number
}