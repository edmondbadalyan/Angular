import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats = [
    {
      title: 'Компоненты',
      value: '3',
      icon: '🧩',
      description: 'Standalone компоненты'
    },
    {
      title: 'Pipes',
      value: '1',
      icon: '🔧',
      description: 'Кастомные pipes'
    },
    {
      title: 'Маршруты',
      value: '2',
      icon: '🛣️',
      description: 'Lazy-loaded routes'
    },
    {
      title: 'Angular',
      value: 'v20',
      icon: '🚀',
      description: 'Последняя версия'
    }
  ];

  features = [
    {
      title: 'Современная архитектура',
      description: 'Feature-based структура с standalone компонентами',
      icon: '🏗️'
    },
    {
      title: 'Lazy Loading',
      description: 'Оптимизированная загрузка модулей по требованию',
      icon: '⚡'
    },
    {
      title: 'TypeScript',
      description: 'Строгая типизация и современный ES синтаксис',
      icon: '📝'
    },
    {
      title: 'SCSS',
      description: 'Современные стили с препроцессором',
      icon: '🎨'
    }
  ];
} 