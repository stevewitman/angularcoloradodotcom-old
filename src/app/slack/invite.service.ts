import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2";
import { Invite } from './invite'

@Injectable()
export class InviteService {

  private basePath: string = './invites';

  invites: FirebaseListObservable<any[]>;

  invite: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private db: AngularFireDatabase) { }

  getInvitesList(query={}): FirebaseListObservable<any[]> {
    this.invites = this.db.list(this.basePath, {
      query: query
    });
    return this.invites
  }

  createInvite(invite: Invite): void  {
    invite.timeStamp = Date.now();
    this.invites.push(invite)
      .catch(error => this.handleError(error))
  }

  private handleError(error) {
    console.log("AB-ERROR", error)
  }

}
