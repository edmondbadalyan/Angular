import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];
  private carsSubject: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);

  constructor() {
    // Создаем несколько машинок для примера
    this.cars = [
      new Car(1, 'red', 'winter', { x: 50, y: 50 }),
      
    ];
    this.carsSubject.next(this.cars);
  }

  getCars(): Observable<Car[]> {
    return this.carsSubject.asObservable();
  }

  changeColor(carId: number, newColor: string): void {
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      car.color = newColor;
      this.carsSubject.next([...this.cars]);
    }
  }

  changeWheelsToSummer(carId: number): void {
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      car.wheelsType = 'summer';
      this.carsSubject.next([...this.cars]);
    }
  }

  moveCar(carId: number, x: number, y: number): void {
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      car.move(x, y);
      this.carsSubject.next([...this.cars]);
    }
  }
}
