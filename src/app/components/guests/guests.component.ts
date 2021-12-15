import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Guest } from 'src/app/interfaces/guest.interface';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit, OnChanges {

  guests: Guest[] = [];
  newGuest: Guest = {};

  constructor(
    private guestService: GuestService,
  ) {
    this.guests = this.guestService.getAllGuest();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['guests'].currentValue) {
      console.log(this.guests)
    }
  }

  ngOnInit(): void {
  }

  addGuest(guest: Guest) {
    this.guestService.addGuest(guest);
    this.guests.push(guest)
  }
}
