import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPosts } from './posts';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  readonly root_url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.root_url).pipe(
      tap(_ => this.log('fetched posts'))
       , catchError(this.handleError('getPosts', []))
    );
  }

  getPost(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(this.root_url + '/' + id.toString()).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<IPosts>('getPost'))
    );
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`PostsService: ${message}`);
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
