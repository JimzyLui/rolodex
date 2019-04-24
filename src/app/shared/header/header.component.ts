import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SessionService } from "../../services/session.service";
import { RouterConfigLoader } from "@angular/router/src/router_config_loader";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: { username: string } = { username: "" };

  private _isLoggedIn: boolean = false;
  private _subscription;

  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = this.session.getSession();
  }

  ngOnInit() {
    this._subscription = this.session.isLoggedInAsObservable();
    this._subscription.subscribe(
      (loggedIn: boolean) => {
        this._isLoggedIn = loggedIn;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /*
  isLoggedIn() {
    return this.session.isLoggedIn();
  }*/

  getIsLoggedIn() {
    return this._isLoggedIn;
  }

  login() {
    return this.router.navigate(["/login"]);
  }

  logout() {
    return this.auth.logout();
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
