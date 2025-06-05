# 🚀 My Angular App - Современная архитектура

Это Angular приложение демонстрирует современные подходы к архитектуре и организации кода в Angular 20.

## 🏗️ Архитектура

Проект организован по **Feature-based архитектуре** с использованием **Standalone Components**:

```
src/app/
├── 📁 core/                     # Основная функциональность
│   └── 📁 services/             # Синглтон сервисы
│       └── data.service.ts      # Сервис управления данными
│
├── 📁 shared/                   # Переиспользуемые компоненты
│   └── 📁 pipes/                # Кастомные пайпы
│       └── exclaim.pipe.ts      # Pipe для трансформации текста
│
├── 📁 features/                 # Функциональные модули
│   ├── 📁 dashboard/            # Модуль дашборда
│   │   ├── 📁 components/
│   │   │   └── dashboard.component.*
│   │   └── dashboard.routes.ts
│   │
│   └── 📁 demo/                 # Модуль демонстрации
│       ├── 📁 components/
│       │   └── pipe-demo.component.*
│       └── demo.routes.ts
│
├── app.component.*              # Корневой компонент
├── app.config.ts               # Конфигурация приложения
└── app.routes.ts               # Главные маршруты
```

## ✨ Особенности

### 🧩 Standalone Components
- Все компоненты используют новый подход Standalone (Angular 14+)
- Нет необходимости в NgModules
- Упрощенная структура и лучшая производительность

### 🛣️ Lazy Loading
- Модули загружаются по требованию
- Оптимизированная производительность
- Современный синтаксис с `loadChildren`

### 🎨 Современный UI/UX
- Responsive дизайн
- Градиенты и анимации
- Современная типографика
- Mobile-first подход

### 🔧 TypeScript
- Строгая типизация
- Интерфейсы для всех данных
- Современный ES синтаксис

## 🚀 Запуск проекта

### Установка зависимостей
```bash
npm install
```

### Запуск dev-сервера
```bash
npm start
# или
ng serve
```

Приложение будет доступно по адресу `http://localhost:4200/`

### Сборка для production
```bash
npm run build
# или
ng build
```

### Запуск тестов
```bash
npm test
# или
ng test
```

## 📱 Страницы

### 📊 Dashboard (`/dashboard`)
- Главная страница приложения
- Статистика проекта
- Описание архитектуры
- Навигация по функциям

### 🚀 Demo (`/demo`)
- Демонстрация кастомного pipe
- Интерактивные примеры
- Обучающий контент

## 🛠️ Технологический стек

- **Angular**: v20.0.0
- **TypeScript**: ~5.8.2
- **RxJS**: ~7.8.0
- **SCSS**: Препроцессор стилей
- **Jasmine + Karma**: Тестирование

## 📋 Принципы архитектуры

### 1. **Separation of Concerns**
- Четкое разделение ответственности
- Каждый модуль решает свою задачу
- Минимальная связанность

### 2. **Feature-based Structure**
- Организация по функциональности
- Самодостаточные модули
- Легкое масштабирование

### 3. **Lazy Loading**
- Загрузка по требованию
- Оптимизация производительности
- Быстрый старт приложения

### 4. **Reactive Programming**
- Использование RxJS
- Реактивные паттерны
- Управление состоянием

## 🔄 Паттерны

### Services
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Синглтон сервис для управления данными
}
```

### Standalone Components
```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './example.component.html'
})
export class ExampleComponent { }
```

### Lazy Routes
```typescript
export const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.routes').then(m => m.routes)
  }
];
```

## 📚 Дополнительные ресурсы

- [Angular Documentation](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## 🤝 Вклад в проект

1. Fork проекта
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект использует MIT лицензию. Подробности в файле [LICENSE](LICENSE).

---

**Создано с ❤️ используя Angular 20 и современные практики разработки**
