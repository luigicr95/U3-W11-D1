import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './classes/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userApi: string = 'https://jsonplaceholder.typicode.com/users/';

  followedUsers: Users[] = [];

  constructor(private http: HttpClient) {}

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.userApi);
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(this.userApi + id);
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userApi, user);
  }

  updateUser(user: Users): Observable<Users> {
    return this.http.put<Users>(this.userApi + user.id, user);
  }

  removeUser(id: number | undefined): Observable<Users> {
    return this.http.delete<Users>(this.userApi + id);
  }
}
