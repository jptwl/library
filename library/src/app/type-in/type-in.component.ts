import { Component, OnInit } from '@angular/core';
import { BookInfo } from 'bookInfo';

@Component({
  selector: 'app-type-in',
  templateUrl: './type-in.component.html',
  styleUrls: ['./type-in.component.css']
})
export class TypeInComponent implements OnInit {

  bookInfo: BookInfo = {
    title:"测试1",
    author:"作者1",
    price:"价格1",
    publisher:"出版社1",
    total_stock:1,
    ISBN:"书号",
    describe:"描述"
  };

  save(callback): void{
    alert( JSON.stringify(this.bookInfo));
    callback&&callback();
  }

  clearInfo(): void{
    this.bookInfo = {
      title:"",
      author:"",
      price:"",
      publisher:"",
      total_stock:0,
      ISBN:"",
      describe:""
    };

    console.log("all clear")
  }

  saveAndNext(): void{
    this.save(this.clearInfo());
  }

  constructor() {

  }

  ngOnInit() {

  }

}
