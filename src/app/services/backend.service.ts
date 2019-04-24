import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  url: string = "http://localhost:4200";

  constructor(private http: HttpClient) {}

  getSmokeTest() {
    return this.http.get("/api/smoke").toPromise();
  }

  getUsers() {
    return this.http.get("/api/users").toPromise();
  }

  createUser(user) {
    return this.http.post("/api/users", user).toPromise();
  }

  register(user) {
    const endpoint = this.url + "/api/register";
    return this.http.post(endpoint, user).toPromise();
  }
  login(user: { username: string }) {
    const endpoint = this.url + "/api/login";
    return this.http.post(endpoint, user).toPromise();
  }
  logout() {
    const endpoint = this.url + "/api/logout";
    return this.http.post(endpoint, {}).toPromise();
  }
}
