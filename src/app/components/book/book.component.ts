import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBooks } from 'src/app/models/ibooks';
import { BookserviceService } from 'src/app/servcies/bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  createBookForm!:any;
  holdBook!:IBooks;
  constructor(private readonly _service:BookserviceService,private readonly _route:Router){}

  ngOnInit(): void {
    this.createAformOfBook();
    
  }
 createAformOfBook(){
  this.createBookForm=new FormGroup({
    bookName:new FormControl('',Validators.required),
    categories:new FormControl('',Validators.required),
    rentPerDays:new FormControl('',Validators.required)
  })
 }


  saveBook(){
    this.holdBook={
      name:this.createBookForm.get('bookName')?.value,
      category:this.createBookForm.get('categories')?.value,
      rentPerDay:this.createBookForm.get('rentPerDays')?.value
    }
    this._service.addNewBookService(this.holdBook).subscribe(res=>{
      alert(res);
      this._route.navigate(['/book_list'])
    })

  }
}
