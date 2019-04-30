import { Component, OnInit } from '@angular/core';

import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.getLoans()
      .subscribe(loans => this.loans = loans);
  }

  add(name: string, repayment: number, funding: number): void {
    name = name.trim();
    if (!name) { return; }
    if (!repayment) { return; }
    if (!funding) { return; }
    this.loanService.addLoan({ name, repayment, funding } as Loan)
      .subscribe(loan => {
        this.loans.push(loan);
      });
  }

  delete(loan: Loan): void {
    this.loans = this.loans.filter(l => l !== loan);
    this.loanService.deleteLoan(loan).subscribe();
  }

}
