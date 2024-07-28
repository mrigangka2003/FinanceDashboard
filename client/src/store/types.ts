export interface ExpensesByCategory{
    salaries :number ;
    supplies : number ;
    servies : number ;
}

export interface Month {
    id : string ;
    month : string ;
    revenue : string ;
    expense : number ;
    nonOperationalExpenses : number ;
    operationalExpenses : number ;
}

export interface Day {
    id : string ;
    month : string ;
    revenue : string ;
    expense : number ;
}


export interface GetkpisResponse {
    id: string ;
    _id: string ;
    __v:number ;
    totalProfit : number ;
    totalRevenue : number ;
    totalExpenses :number ;
    expensesByCategory :ExpensesByCategory ;
    monthlyData :Array<Month> ;
    dailyData : Array<Day> ;
}