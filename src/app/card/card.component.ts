import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export interface Card {
  title: string;
  status: 'success' | 'warning' | 'danger';
  type: string;
  date: number;
  isLoading: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() arr: Card[];
  @Output() card: EventEmitter<Card> = new EventEmitter<Card>();

  onClick(item): void {
    this.card.emit(item);
  }

  toDate(timestamp: number): string {
   return new Date(timestamp).toLocaleDateString();
  }
}
