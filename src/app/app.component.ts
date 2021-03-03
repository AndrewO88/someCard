import {Component} from '@angular/core';
import {Card} from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saha';

  arr: Card[] = [
    {
      title: 'Kek kek kek kek',
      status: 'danger',
      type: 'kek',
      date: Date.now(),
      isLoading: true
    },
    {
      title: 'Kekkek kekkek',
      status: 'success',
      type: 'kek',
      date: Date.now(),
      isLoading: false
    },
    {
      title: 'Kekkekkekkekkekkekkekkekkekkekekeke',
      status: 'warning',
      type: 'kek',
      date: Date.now(),
      isLoading: false
    },
  ];

  test($event: Card): void {
    console.log('этот консоль лог пришел из аппп компонента', $event);
  }
}
