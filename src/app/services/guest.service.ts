import { Injectable } from '@angular/core';
import { Guest } from '../interfaces/guest.interface';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  guestList: Guest[] = [];
  private key = 'Guests';

  constructor() {}

  addGuest(guest: Guest) {
    const guests = this.getAllGuest();
    guests.push(guest);
    sessionStorage.setItem(this.key, JSON.stringify([...guests]));
  }

  updateGuest(index: number, guest: Guest): void {
    const guests = this.getAllGuest();
    guests[index] = guest;
    sessionStorage.setItem(this.key, JSON.stringify([...guests]));
  }

  removeGuest(index: number): void {
    let guests = this.getAllGuest();

    guests.splice(index, 1);
    sessionStorage.setItem(this.key, JSON.stringify([...guests]));
  }

  getAllGuest() {
    return JSON.parse(sessionStorage.getItem(this.key) || '[]');
  }

  removeAll(): void {
    sessionStorage.removeItem(this.key);
  }
}
