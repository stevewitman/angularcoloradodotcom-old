import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {

  item: Item = new Item();
  public items: FirebaseListObservable<any[]>;

  submitted = false;

  constructor(private itemSvc: ItemService) { }

  createItem() {
    this.itemSvc.createItem(this.item)
    this.submitted = true;
    this.item = new Item() // reset item
  }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5})
  }

}
