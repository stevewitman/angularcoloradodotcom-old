import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Invite } from './invite'
import { InviteService } from './invite.service'

@Component({
  selector: 'ab-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['./slack.component.css']
})

export class SlackComponent implements OnInit {

  invite: Invite = new Invite();
  public invites: FirebaseListObservable<any[]>;

  constructor(private inviteSvc: InviteService) { }

  inviteRequest() {
    this.inviteSvc.createInvite(this.invite)
    this.invite = new Invite()
  }

  ngOnInit() {
    this.invites = this.inviteSvc.getInvitesList({limitToLast: 5})
  }

}
