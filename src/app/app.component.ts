import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { Car } from './shared/models/car.model';
import { CarService } from './shared/services/car.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cars$!: Observable<Car[]>;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars$ = this.carService.getCars();
  }
} 