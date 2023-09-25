export interface IContext{
    city?: string,
    setCity?: IFunction
}


export interface ICreate{
     ({city, setCity}:IContext): IContext;
}

export interface IFunction{
    (value: string) : void;
}
