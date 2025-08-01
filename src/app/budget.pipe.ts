import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {
  transform(value: string | number, currencyCode: string = 'USD', symbolDisplay: 'symbol' | 'code' = 'symbol'): string {
    if (typeof value === 'number') {
      return this.formatCurrency(value, currencyCode, symbolDisplay);
    }

    if (typeof value === 'string') {
      const parts = value.split('-').map(part => part.trim());
      if (parts.length === 2 && !isNaN(+parts[0]) && !isNaN(+parts[1])) {
        const formattedStart = this.formatCurrency(+parts[0], currencyCode, symbolDisplay);
        const formattedEnd = this.formatNumber(+parts[1]);
        return `${formattedStart} – ${formattedEnd}`;
      }

      // Si c’est un seul nombre dans une string
      if (!isNaN(+value)) {
        return this.formatCurrency(+value, currencyCode, symbolDisplay);
      }
    }

    return value; // valeur brute si invalide
  }

  private formatCurrency(amount: number, currencyCode: string, symbolDisplay: 'symbol' | 'code'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: symbolDisplay,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  private formatNumber(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}
