import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // this.route.params.subscribe((params: Params) => {
    //   const id: number = +params['id']  // Casting to number! fuck typescript
    //   this.server = this.serversService.getServer(id);
    // })

  }

  onEdit() {
    this.router.navigate([/*'/servers', this.server.id, */'edit'], {relativeTo: this.route, queryParamsHandling: "preserve"})
  }
}
