import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'Shoe Store';
  about = 'This shoe store was made in CST-391. It uses Angular';

  displayVersion()
  {
    alert(this.about);
  }

  displayShoeList()
  {
    this.router.navigate(['list-shoes'], { queryParams: { data: new Date() } });
  }
}
