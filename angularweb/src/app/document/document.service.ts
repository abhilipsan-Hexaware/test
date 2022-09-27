import { Injectable } from "@angular/core";
import { Document } from "./document";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getDocumentById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/document/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getDocument(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/document`)
      .pipe(catchError(this.errorHandler));
  }

  addDocument(data: Document): Observable<any> {
    return this.httpClient
      .post(`${this.endpoint}/document`, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  editDocument(id: any, data: Document): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/document/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteDocument(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/document/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
