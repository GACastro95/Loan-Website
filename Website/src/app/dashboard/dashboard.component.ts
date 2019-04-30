import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.getLoans()
      .subscribe(loans => this.loans = loans.slice(0, 28));
  }

}
