import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng190716';
  keyword = '';
  data: any = [];

  constructor(private datasvc: DataService) {

  }

  ngOnInit(): void {
    this.datasvc.loadData().subscribe((data) => {
      this.data = data;
    });
  }

  doSearch(str) {
    this.keyword = str;
  }

  doDelete(id) {
    console.log('Delete ' + id);
  }
}
