import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}
export class UserProfileComponent {
  user: User = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );
  showMyAge: boolean = false;

  constructor() {}
  // ngOnInit(): void {}

  buttonShowHiddenAge() {
    this.showMyAge = !this.showMyAge;
  }
}
