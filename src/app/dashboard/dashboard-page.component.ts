import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: [
  ]
})
export class DashboardPageComponent {


  public flag: boolean = true;

  showSideBar(){
    this.flag = !this.flag;
    console.log( this.flag )
  }
}