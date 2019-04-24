import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  user: {
    username: string;
    loggedIn: boolean;
  } = {
    username: "",
    loggedIn: false
  };

  // subject to hold isLoggedIn value (default=false)
  private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

  // on application load
  constructor() {
    // check if user is in localStorage
    let userString = window.localStorage.getItem("user");
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      } else {
        console.log("user was not found");
      }
      // update _isLoggedInSubject on construction
      this._isLoggedInSubject.next(!!userString);
    } catch (err) {
      console.log("could not parse user");
    }
  }

  // login
  setSession(user) {
    // save to memory
    this.user.username = user.username;
    // this.user.loggedIn = true;

    // save to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem("user", userString);
    // update subject
    this._isLoggedInSubject.next(true);
  }

  // logout
  clearSession() {
    // this.user.loggedIn = false;
    this.user.username = "";
    window.localStorage.removeItem("user");
    this._isLoggedInSubject.next(false);
  }
  // helper method
  getSession() {
    return this.user;
  }

  // isLoggedIn() {
  //   return this.user.loggedIn;
  // }

  isLoggedInAsObservable() {
    return this._isLoggedInSubject.asObservable();
  }
}
