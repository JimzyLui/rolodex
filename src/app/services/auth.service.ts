import { Injectable } from "@angular/core";
import { BackendService } from "./backend.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) {}

  register(user: { username: string }) {
    return this.backend.register(user);
  }

  login(user: { username: string }) {
    return this.backend.login(user).then((user: { username: string }) => {
      return this.session.setSession(user);
    });
  }
  logout() {
    return this.backend.logout().then(() => {
      return this.session.clearSession();
    });
  }
}
