export interface totalTypes {
    totalSales: number;
    totalSalePercents: string;
    totalOrders: number;
    totalOrderPercents: string;
    totalCustomers: number;
    totalCustomerPercents: string;
    totalEarnings: number;
    totalEarningsPercents: string;
}

export interface weeklySaleTypes {
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
}


export interface saleAndProfitTypes {
    total: number;
    percent:number;
}

export interface productClassTypes {
    electronics: number;
    clothes: number;
    beautyCare: number;
    books: number;
    toys: number;
}

export interface customerSatisfactionTypes {
    lastMonth: number;
    thisMonth: number;
}

export interface recentOrderTypes {
    profile:string;
    city:string;
    date: Date;
    status: string;
    price: number;
}

export interface saleTargetTypes {
    target: number;
}

