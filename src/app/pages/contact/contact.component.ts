import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements AfterViewInit {
  @ViewChild("nameInput") nameInput: ElementRef;

  formData: {
    name: string;
    email: string;
    message: string;
  } = {
    name: "",
    email: "",
    message: ""
  };

  nameValid: boolean = false;
  emailValid: boolean = false;
  messageValid: boolean = false;

  nameErrorMessage: string = "initial";
  emailErrorMessage: string = "initial";
  messageErrorMessage: string = "initial";

  constructor() {
    // this.formData.email = "34";
  }
  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }
  /*
  validateName() {
    if (!this.formData.name) {
      this.nameValid = false;
    } else if (this.formData.name.length < 3) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  } */
  validateName() {
    if (!this.formData.name) {
      this.nameErrorMessage = "Name is required";
    } else if (this.formData.name.length < 3) {
      this.nameErrorMessage = "Name must be of length 3";
    } else {
      this.nameErrorMessage = "";
    }
  }

  validateEmail() {
    if (!this.formData.email) {
      this.emailErrorMessage = "Email Required";
    } else if (this.formData.email.length < 3) {
    } else if (!this.formData.email.includes("@")) {
      this.emailErrorMessage = "Email requires @ symbol";
    } else {
      this.emailErrorMessage = "";
    }
  }

  validateMessage() {
    if (!this.formData.message) {
      this.messageErrorMessage = "Message Required";
    } else if (this.formData.message.length < 3) {
      this.messageErrorMessage = "Message length should be greater than 3";
    } else {
      this.messageErrorMessage = "";
    }
  }

  submit() {
    if (
      this.nameErrorMessage ||
      this.emailErrorMessage ||
      this.messageErrorMessage
    ) {
      return;
    }
    console.log("submitted");
  }

  clearData() {
    this.formData.name = "";
    this.formData.email = "";
    this.formData.message = "";
  }
}
