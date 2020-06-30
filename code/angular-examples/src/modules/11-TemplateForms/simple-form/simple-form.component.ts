import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  ages:number[] = [20, 30, 40, 50];

  userModel:User = new User(18, 'Dr IQ', this.ages[0]);

  submitted:boolean = false;

  onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.userModel); }

}
