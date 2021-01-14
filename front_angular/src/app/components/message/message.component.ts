import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  date;

  constructor() { }

  ngOnInit(): void {
    this.date = "11-12-20 | 15:03"
  }

}
