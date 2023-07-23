import { Injectable } from '@angular/core';
import { UserClient } from '../client/UserClient';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient: UserClient) {}

  confirmaCadastro(registration: String): Promise<User> {
    return this.userClient.confirmaCadastro(registration);
  }
}
