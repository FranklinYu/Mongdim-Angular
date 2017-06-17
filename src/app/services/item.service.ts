import { Injectable } from '@angular/core';

import { Item } from 'app/models/item'

const mock_items = Object.freeze([
  new Item(1, 'Blue Shirt', 32, 'USD'),
  new Item(3, 'Yellow Skirt', 35, 'USD'),
  new Item(8, 'Black and White Pants', 10, 'USD'),
  new Item(10, 'Green Blouse', 25, 'USD'),
  new Item(11, 'Black Shoe', 51, 'USD'),
  new Item(12, 'Purple Scarf', 32, 'USD')
]);

@Injectable()
export class ItemService {

  private items: Item[] = mock_items.slice();

  constructor() { }

  async getItem(): Promise<Item[]> {
    return this.items;
  }

}
