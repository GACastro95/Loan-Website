import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Loan } from './loan';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const loans = [

      { id: 1, name: 'Mr. Nice', repayment: 750, funding: 500 },
      { id: 2, name: 'Marth', repayment: 1350, funding: 1100 },
      { id: 3, name: 'Quinn', repayment: 900, funding: 650 },
      { id: 4, name: 'Richter', repayment: 550, funding: 300 },
      { id: 5, name: 'Konami', repayment: 1050, funding: 800 }
    ];
    return {loans};
  }

  // Overrides the genId method to ensure that a loan always has an id.
  // If the loans array is empty,
  // the method below returns the initial number (11).
  // if the loans array is not empty, the method below returns the highest
  // loan id + 1.
  genId(loans: Loan[]): number {
    return loans.length > 0 ? Math.max(...loans.map(loan => loan.id)) + 1 : 11;
  }
}