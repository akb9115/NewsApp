import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#000000',
  'background-color': '#1f2935',
  'text-color': '#fff',
  'card-color':'#808080',
  'pagination-color':'#696969'
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'card-color': '#D0F0FF',
  'pagination-color':'#ffffff'
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}