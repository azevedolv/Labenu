export type InputShow = {
    band_id:string, 
    week_day:string, 
    start_time:number, 
    end_time:number
}

export type InputVerify = {
    week_day:string,
    start_time:number,
    end_time:number
}

export type InputTicket = {
    token:string,
    name:string,
    value:number,
    show_id:string,
    quantity:number
}

export type InputUserTicket = {
    token:string,
    show_id:string,
    quantity:number
}
