import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/models/iusers';
import { UserSerService } from 'src/app/servcies/user-ser.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userLis: any[] = [];
  searchTerm:string='';
  
  selectedUser: Iusers | null = null;

  constructor(private readonly _servcie: UserSerService, private readonly _route: Router) { }

  ngOnInit(): void {
    this.getUser();

  }

  getUser() {
    this._servcie.getUserService().subscribe(res => {
      this.userLis = res;
    })
  }

  deleteUser(id: number) {
    if (confirm("Are u sure to delete it")) {
      this._servcie.deleteUserData(id).subscribe(res => {
        alert(res);
      })
    }

  }


  
  updateUser(item: Iusers) {
    this._route.navigate(['/users'], { state: { user: item } }); // Navigate to update form
  }
  



}
