import { Component, OnInit } from '@angular/core';

import { ItemService } from 'app/services/item.service';
import { Item } from 'app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  async ngOnInit() {
    this.items = await this.itemService.getItem();
  }

}
