import { Injectable } from '@angular/core';
import { BookInfo } from 'type-in/bookInfo';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBook(): Observable<BookInfo> {
    return of ({
      title:"测试1",
      author:"作者1",
      price:"价格1",
      publisher:"出版社1",
      total_stock:1,
      ISBN:"书号",
      describe:"描述"
    })
  }

  constructor() { }
}
