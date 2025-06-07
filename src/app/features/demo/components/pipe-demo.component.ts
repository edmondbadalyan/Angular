import { Component } from '@angular/core';
import { ExclaimPipe } from '../../../shared/pipes/exclaim.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [ExclaimPipe, CommonModule, FormsModule],
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {
  text = 'привет мир';
  name = 'Эдмонд';
  customText = '';
  
  examples = [
    { original: 'angular' },
    { original: 'typescript' },
    { original: 'разработка' }
  ];

  onCustomTextChange(): void {
    // Эта функция добавлена для устранения ошибки компиляции.
  }
} 