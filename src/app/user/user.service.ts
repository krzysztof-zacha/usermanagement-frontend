import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'localhost:8080/user';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http
      .get<User[]>(this.url)
      .pipe(map(data => data), catchError(this.handleError));
  }

  save(user: User) {
    return user.id ? this.put(user) : this.post(user);
  }

  delete(user: User) {
    const url = `${this.url}/${user.id}`;
    return this.http.delete<User>(url).pipe(catchError(this.handleError));
  }

  private post(user: User) {
    return this.http
      .post<User>(this.url, user)
      .pipe(catchError(this.handleError));
  }

  private put(user: User) {
    const url = `${this.url}/${user.id}`;
    return this.http.put<User>(url, user).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server Error');
  }
}
