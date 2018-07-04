import { Injectable } from '@angular/core';
import { BookInfo } from 'src/app/bookInfo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://127.0.0.1:3000/post';
  getBook(): Observable<BookInfo> {
    return of ({
      title: '测试1',
      author: '作者1',
      price: '价格1',
      publisher: '出版社1',
      total_stock: 1,
      ISBN: '书号',
      describe: '描述'
    });
  }

  updateBook(bookInfo: BookInfo): Observable<any> {
    console.log(bookInfo);
    return this.http.post<BookInfo>(this.url, bookInfo, httpOptions);
  }
  constructor(
    private http: HttpClient
  ) { }


}
