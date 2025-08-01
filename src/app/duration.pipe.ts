import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {
  transform(totalMin: number): string {
      if (isNaN(totalMin) || totalMin < 0) {
        return '';
      }

      const hours = Math.floor(totalMin / 60);
      const min = totalMin % 60;

      return `${hours}h ${min}min`;
    }
}
