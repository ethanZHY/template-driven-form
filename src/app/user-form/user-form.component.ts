import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  sex = ['Male', 'Female', 'Not specified'];
  id = 0;
  user = new User(11, 'Ethan', this.sex[0], 'ethan@orig3n.com');
  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // Has the same effect as pipe json does
  get diagnostic() { return JSON.stringify(this.user); }

  createUser() { this.user = new User(this.id++, '', this.sex[2], ''); }
}
