import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/interfaces/guest.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() guest: Guest =  {
    id:'',
    firstName: '',
    lastName: '',
    fullname: '',
    typeGuest: '',
    isMainGuest: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  deleteGuest(event: Event) {
    console.log(event.target)
  }

}