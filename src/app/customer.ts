export interface Customer {
    id?: number;
    name?: string;
    cardNumber?: string;
    expireMonth?: string;
    expireYear?: string;
    securityCode?: number;
}

export const Month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const Year: string[] = ['2016','2017','2018','2019','2020','2021','2022'];