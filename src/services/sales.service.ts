import { Injectable } from '@angular/core';

@Injectable()
export class SalesService {

    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

    constructor() { }

    get():Promise<any> {
        return Promise.resolve(this.lineChartData);
    }

    getSocial():Promise<any> {
        return Promise.resolve(
            [
                {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
            ]
        );
    }
    
}