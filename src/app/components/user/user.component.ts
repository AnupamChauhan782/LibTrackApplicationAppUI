import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/models/iusers';
import { UserSerService } from 'src/app/servcies/user-ser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  creation!: any;
  holdModel!: Iusers;

  constructor(private readonly _ser: UserSerService, private readonly _rout: Router) { }

  ngOnInit(): void {
    this.createAForm();

    this.holdModel = history.state.user; // Get user data passed from previous component
    if (this.holdModel) {
      this.creation.patchValue({
        userName: this.holdModel.user_Name,
        emailId: this.holdModel.email,
      });
    }
  }

  createAForm() {
    this.creation = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      emailId: new FormControl('', Validators.email)
    })
  }

  create() {
    // If holdModel is defined, we are updating an existing user
    if (this.holdModel) {
      
      this.holdModel = {
        userId: this.holdModel.userId,
        user_Name: this.creation.get('userName')?.value,
        email: this.creation.get('emailId')?.value
      };

      
      this._ser.updateUserData(this.holdModel).subscribe(res => {
        alert('User updated successfully!'); // Alert message
        this._rout.navigate(['/user_list']); // Navigate to the user list
      }, error => {
        alert('Error updating user: ' + error.message); // Error alert
      });
    } else {
     
      this.holdModel = {
        user_Name: this.creation.get('userName')?.value,
        email: this.creation.get('emailId')?.value
      };

     
      this._ser.addNewUserService(this.holdModel).subscribe(res => {
        alert('User created successfully!'); // Alert message
        this._rout.navigate(['/user_list']); // Navigate to the user list
      }, error => {
        alert('Error creating user: ' + error.message); // Error alert
      });
    }
  }




}
