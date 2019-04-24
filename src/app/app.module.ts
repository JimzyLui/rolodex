import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { LoginComponent } from "./pages/login/login.component";

// Shared Components
import { HeaderComponent } from "./shared/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
