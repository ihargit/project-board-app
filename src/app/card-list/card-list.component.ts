import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/Card';
import { ICardList } from '../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, ICardList {
  id: string;
  name: string;
  cards: ICard[];

  constructor() {}

  ngOnInit() {}
}
