import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/servcies/bookservice.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList!:any;
  searchTerm:string='';
  constructor(private readonly _service:BookserviceService){}

  ngOnInit(): void {
  this.getBooks();
  }

getBooks(){
  this._service.getBookServcie().subscribe(res=>{
    this.bookList=res;
  })
}

}
