import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBooks } from '../models/ibooks';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  getUrl='https://localhost:7025/api/Books';
  postBookUrl='https://localhost:7025/api/Books/AddNewBooks';
  
  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json'
    })
  }

  constructor(private readonly _http:HttpClient) { }

  getBookServcie():Observable<IBooks[]>{
    return this._http.get<IBooks[]>(this.getUrl);
  }
  
  addNewBookService(req:IBooks):Observable<any>{
    return this._http.post(this.postBookUrl,req,this.httpOption);
  }
}
