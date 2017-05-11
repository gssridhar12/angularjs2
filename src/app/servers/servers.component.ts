import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = "";
  serverName = "";
  servers = [];

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer = () => {
    this.servers.push(this.serverName)
    this.serverCreationStatus = "server created. Server name is: "+this.serverName;
  }


}
