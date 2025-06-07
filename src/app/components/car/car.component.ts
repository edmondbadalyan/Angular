import { Component, Input } from '@angular/core';
import { Car } from '../../shared/models/car.model';
import { CarService } from '../../shared/services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car!: Car;

  constructor(private carService: CarService) {}

  changeColor(newColor: string): void {
    this.carService.changeColor(this.car.id, newColor);
  }

  changeWheelsToSummer(): void {
    this.carService.changeWheelsToSummer(this.car.id);
  }

  moveCar(): void {
    // Демонстрационное движение на 10px вправо
    this.carService.moveCar(this.car.id, 300, 0);
  }
}
