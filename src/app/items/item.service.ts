import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2";
import { Item } from './item'

@Injectable()
export class ItemService {

  private basePath: string = '/items';

  items: FirebaseListObservable<any[]>;

  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private db: AngularFireDatabase) { }

  getItemsList(query={}): FirebaseListObservable<any[]> {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    return this.items
  }

  createItem(item: Item): void  {
    item.timeStamp = Date.now();
    this.items.push(item)
      .catch(error => this.handleError(error))
  }

  private handleError(error) {
    console.log(error)
  }

}
