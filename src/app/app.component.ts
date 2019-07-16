import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng190716';
  keyword = '';
  data: any = [];

  ngOnInit(): void {
    fetch('/api/articles.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
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
