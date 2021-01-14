import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isConnected;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.subscribe(user => this.isConnected = user != null);
  }

}
