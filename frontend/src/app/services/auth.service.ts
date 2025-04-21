import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public user$ = this.userSubject.asObservable();

  private apiUrl = 'http://localhost';

  constructor(private http: HttpClient) {}

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  private saveUserToStorage(user: User): void{
    localStorage.setItem('user', JSON.stringify(user));
  }

  private removeUserFromStorage(): void {
    localStorage.removeItem('user');
  }

  login(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(user => this.saveUserToStorage(user)),
    );
  }

  logout(): void{
    this.removeUserFromStorage();
    this.userSubject.next(null);
  }

  get currentUser(): User | null{
    return this.userSubject.value;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
