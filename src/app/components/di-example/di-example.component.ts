import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../../core/services/greeting.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-example',
  templateUrl: './di-example.component.html',
  styleUrls: ['./di-example.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DiExampleComponent implements OnInit {

  greeting: string = '';

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greeting = this.greetingService.getGreeting();
  }
} 