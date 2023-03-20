import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public itemsUser = [
    { label:'Profile', icon: 'pi pi-lock'},
    { label: 'Log out', icon: 'pi pi-power-off' }
  ]
  public items = [
    {label: 'Search', icon: 'pi pi-search'},

   
];

  @Output()
  public showEmitter: EventEmitter<boolean> = new EventEmitter();

  showSideBar(){
    this.showEmitter.emit()
  }
}
