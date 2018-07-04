import { Component, OnInit } from '@angular/core';
import { BookInfo } from 'src/app/bookInfo';
import { BookService } from '../book.service';

@Component({
  selector: 'app-type-in',
  templateUrl: './type-in.component.html',
  styleUrls: ['./type-in.component.css']
})
export class TypeInComponent implements OnInit {

  bookInfo: BookInfo;

  save(callback): void {
    this.bookService.updateBook(this.bookInfo)
      .subscribe(() => this.clearInfo());
    alert( JSON.stringify(this.bookInfo));
    callback&&callback();
  }

  clearInfo(): void{
    this.bookInfo = {
      title: '',
      author: '',
      price: '',
      publisher: '',
      total_stock: 0,
      ISBN: '',
      describe: ''
    };

    console.log('all clear');
  }

  saveAndNext(): void{
    this.save(this.clearInfo());
  }

  constructor(private bookService: BookService) {}

  getBook(): void {
    this.bookService.getBook()
      .subscribe(bookInfo => this.bookInfo = bookInfo);
  }

  ngOnInit() {
    this.getBook();
  }

}
