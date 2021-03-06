import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Member } from './../_models/member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseURL + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseURL + 'users/' + username);
  }
}
