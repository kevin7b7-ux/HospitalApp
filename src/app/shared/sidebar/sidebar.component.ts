import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  @Input()
  public display : boolean= true;
  public items = [
    {
      label: 'Doctors',
      items: [
        { label: "List Doctors", icon: "pi pi-users", routerLink: './doctors/list'},
        { label: "Create a Doctors", icon: "pi pi-plus-circle", routerLink: './doctors/create' }
      ]
    },
    {
      label: 'Hospitals',
      items: [
        { label: "List Hospitals", icon: "pi pi-building", routerLink: './hospitals/list' },
        { label: "Create a Hospital", icon: "pi pi-plus-circle", routerLink: './hospitals/create' }
      ]
    },
  ]

}
