

export interface props {
    show : boolean,
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
    date : string,
    setDate : React.Dispatch<React.SetStateAction<string>>,
    price : number,
    setPrice : React.Dispatch<React.SetStateAction<number>>,
    time : string,
    setTime : React.Dispatch<React.SetStateAction<string>>,
    availableTime : object[] | null,
    setAvailableTime : React.Dispatch<React.SetStateAction<object[] | null>>,
    times : {
        time: string;
        booked: boolean;
    }[],
    service : string,
    setService : React.Dispatch<React.SetStateAction<string>>,
    booked_time : string[],
    update : boolean,
    id? : number,
}