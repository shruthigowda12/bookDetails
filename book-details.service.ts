import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IBookDetails } from './services/book-details';
//import { catchError } from 'rxjs/operators';

 @Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  
 
  constructor(private http: HttpClient) { }

  /*getBookDetails(): Observable<any> {
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/book/21");
    //.pipe(catchError(this.errorHandler));
  }
 // errorHandler(error:HttpErrorResponse){
   // return throwError(error.message || "Unknown Server Error");*/
  
  getBookDetailsByParameter(): Observable<IBookDetails[]>{
    let param=new HttpParams().set('bookId','21');
    return this.http.get<IBookDetails[]>("https://bookcart.azurewebsites.net/api/book/21",{params:param});

   }
}
