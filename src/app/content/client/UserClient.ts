import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable({providedIn: 'root'})
export class UserClient {

  constructor(private httpClient: HttpClient){}

  confirmaCadastro(registration: String): Promise<User> {
    return this.httpClient.get<User>(`http://localhost:8080/todomanagement/user/confirmaCadastro/${registration}`).toPromise();
  }
}
