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
    { original: 'angular', transformed: '' },
    { original: 'typescript', transformed: '' },
    { original: 'разработка', transformed: '' }
  ];

  constructor() {
    this.updateExamples();
  }

  updateExamples() {
    this.examples.forEach(example => {
      example.transformed = this.transformText(example.original);
    });
  }

  private transformText(text: string): string {
    return text.toUpperCase() + '!';
  }

  onCustomTextChange() {
    // Реактивное обновление при изменении текста
  }
} 