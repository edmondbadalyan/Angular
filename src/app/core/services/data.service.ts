import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppData {
  title: string;
  version: string;
  lastUpdated: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private appDataSubject = new BehaviorSubject<AppData>({
    title: 'My Angular App',
    version: '1.0.0',
    lastUpdated: new Date()
  });

  public appData$ = this.appDataSubject.asObservable();

  constructor() {
    console.log('🚀 DataService инициализирован');
  }

  getAppData(): Observable<AppData> {
    return this.appData$;
  }

  updateAppData(data: Partial<AppData>): void {
    const currentData = this.appDataSubject.value;
    this.appDataSubject.next({
      ...currentData,
      ...data,
      lastUpdated: new Date()
    });
  }

  getCurrentAppData(): AppData {
    return this.appDataSubject.value;
  }
} 