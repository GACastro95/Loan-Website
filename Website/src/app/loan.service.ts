import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { LOANS } from './mock-loans';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  private loansUrl = 'http://localhost:50202/api/loan';

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.loansUrl)
      .pipe(
        tap(_ => this.log('fetched loans')),
        catchError(this.handleError('getLoans', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getLoan(id: number): Observable<Loan> {
    const url = `${this.loansUrl}/${id}`;
    return this.http.get<Loan>(url).pipe(
      tap(_ => this.log(`fetched loan id=${id}`)),
      catchError(this.handleError<Loan>(`getLoan id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateLoan (loan: Loan): Observable<any> {
    const id = typeof loan === 'number' ? loan : loan.id;
    const url = `${this.loansUrl}/${id}`;
    return this.http.put(url, loan, httpOptions).pipe(
      tap(_ => this.log(`updated loan id=${loan.id}`)),
      catchError(this.handleError<any>('updateLoan'))
    );
  }

  /** POST: add a new hero to the server */
  addLoan (loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.loansUrl, loan, httpOptions).pipe(
      tap((loan: Loan) => this.log(`added loan w/ id=${loan.id}`)),
      catchError(this.handleError<Loan>('addLoan'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteLoan (loan: Loan | number): Observable<Loan> {
    const id = typeof loan === 'number' ? loan : loan.id;
    const url = `${this.loansUrl}/${id}`;

    return this.http.delete<Loan>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted loan id=${id}`)),
      catchError(this.handleError<Loan>('deleteLoan'))
    );
  }

  private log(message: string) {
    this.messageService.add(`LoanService: ${message}`);
  }

 /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

}
