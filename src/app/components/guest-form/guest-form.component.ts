import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Guest } from 'src/app/interfaces/guest.interface';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css'],
})
export class GuestFormComponent implements OnInit {
  @Input() guests: Guest[] = [];
  @Input() guest: Guest = {
    id: '',
    firstName: '',
    lastName: '',
    fullname: '',
    typeGuest: '',
    isMainGuest: false,
  };
  @Output() addNewGuest = new EventEmitter<Guest>();

  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
  }

  addGuest(): void {
    this.getFormValues();
    this.addNewGuest.emit(this.guest);
  }

  getFormValues(): void {
    const fullname = `${this.firstName.value} ${this.lastName.value}`;

    this.guest = {
      id: '',
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      fullname: fullname,
      typeGuest: 'Client',
      isMainGuest: false,
    };
  }
}
