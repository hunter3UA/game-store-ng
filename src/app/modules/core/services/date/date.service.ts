import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(private datePipe: DatePipe) {}

  converToYMDFormat(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
