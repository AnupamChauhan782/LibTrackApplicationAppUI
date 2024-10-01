import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Iusers } from '../models/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserSerService {
  getUrl = 'https://localhost:7025/api/Users/GetUsersDetails';
  postUrl = 'https://localhost:7025/api/Users/AddNewUserInTheLib';
  deleteUrl='https://localhost:7025/api/Users/DeleteUserInformation?id=';
  updateUrl='https://localhost:7025/api/Users/UpadteUserInformation';

  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json'
    })
  }

  constructor(private readonly _http: HttpClient) { }

  getUserService(): Observable<Iusers[]> {
    return this._http.get<Iusers[]>(this.getUrl).pipe(catchError(err => {
      throw err;
    }));
  }

  addNewUserService(req: Iusers): Observable<any> {
    return this._http.post(this.postUrl, req, this.httpOption);
  }

  deleteUserData(id:number):Observable<any>{
    return this._http.delete(this.deleteUrl+id,this.httpOption);
  }

  updateUserData(req:Iusers):Observable<any>{
  return this._http.put(this.updateUrl,req,this.httpOption);
  }
  
}
