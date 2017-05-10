import { Component } from '@angular/core';

@Component ({
    selector : "app-server",
    templateUrl : "./server.component.html"
})

export class ServerComponent {
  serverId = Math.random() * 10;
  serverStatus = this.serverId>5 ? "online" : "offline";

  getColor(){
    return this.serverId > 5 ? "green" : "red";
  }
}
