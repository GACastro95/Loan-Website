import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  @Input() loan: Loan;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getLoan();
  }

  getLoan(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoan(id)
      .subscribe(loan => this.loan = loan);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.loanService.updateLoan(this.loan)
    .subscribe(() => this.goBack());
  }
}
