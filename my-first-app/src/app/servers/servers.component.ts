import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: "app-servers",
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
    inline`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server created yet";
  serverName: string = 'testServer';
  serverCreated:boolean = false;
  servers: string[] = ['testServer', 'testServer2']
  username: string = '';
  showSecret: boolean = false;
  timestamps: number[] = [];

  constructor() {
    setTimeout(() => {this.allowNewServer = true},2000)
  }

  ngOnInit(): void {
  }

  toggleSecret() {
    console.log()
    this.showSecret = !this.showSecret;
    this.timestamps.push(Date.now());
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created. Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onUsernameButtonClick() {
    this.username = "";
  }

  getTimestampBackground(): string {
    return this.timestamps.length > 5 ? 'blue': '';
  }
}
