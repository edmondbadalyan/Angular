import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  getGreeting(): string {
    return 'Привет от GreetingService!';
  }
} 