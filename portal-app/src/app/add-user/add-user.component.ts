import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          //alert("User created successfully.");
          this.router.navigate(['list-user']);
        });

  };

}
