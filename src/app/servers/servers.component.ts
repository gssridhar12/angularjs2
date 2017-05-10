import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "yet to create";
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
      this.serverName = "Sridhar";
    }, 5000);
  }

  ngOnInit() {
  }

  onCreateServer = () => {
    this.serverCreationStatus = "server created. Server name is: "+this.serverName;
  }


}
