import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { User } from "../models/User";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";

@Injectable({providedIn: 'root'})
export class ConfirmacaoCadastroResolver implements Resolve<User> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    return this.userService.confirmaCadastro(route.params.registration).then(user => user).catch(error => null);
  }

}
